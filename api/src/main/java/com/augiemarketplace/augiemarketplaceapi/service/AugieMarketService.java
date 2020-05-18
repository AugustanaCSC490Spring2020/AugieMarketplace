package com.augiemarketplace.augiemarketplaceapi.service;

import com.augiemarketplace.augiemarketplaceapi.model.ItemModel;
import com.augiemarketplace.augiemarketplaceapi.model.ItemWrapper;
import com.augiemarketplace.augiemarketplaceapi.model.UserModel;
import com.augiemarketplace.augiemarketplaceapi.repository.AugieMarketRepo;
import com.google.api.core.ApiFuture;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.*;
import com.google.cloud.storage.Bucket;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.cloud.FirestoreClient;
import com.google.firebase.cloud.StorageClient;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.logging.Logger;

@Service
public class AugieMarketService {

    private AugieMarketRepo userRepository;
    private Logger logger = Logger.getLogger(String.valueOf(AugieMarketService.class));

    public UserModel postUserToFireBase(FirebaseToken decodedToken) {
        UserModel fireBaseInfo = UserModel.builder()
                .userId(decodedToken.getUid())
                .email(decodedToken.getEmail())
                .name(decodedToken.getName())
                .picture(decodedToken.getPicture())
                .issuer(decodedToken.getIssuer())
                .createdAt(Timestamp.now().toString())
                .build();
        Firestore dbFireStore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFireStore.collection("users").
                document(decodedToken.getEmail()).set(fireBaseInfo);
        return fireBaseInfo;
    }

    public String postItem(ItemModel itemModel, String uuid) throws ExecutionException, InterruptedException, IOException {
        List<ItemModel> updatedModel = new ArrayList<>();
        ItemModel updateItem = itemModel.builder()
                .itemId(new ObjectId().toString())
                .userId(uuid)
                .price(itemModel.getPrice())
                .isAvailable(true)
                .name(itemModel.getName())
                .email(itemModel.getEmail())
                .description(itemModel.getDescription())
                .imageUrl(new ArrayList<>())
                .type(itemModel.getType())
                .createdAt(Timestamp.now().toString())
                .build();
        Firestore dbFireStore = FirestoreClient.getFirestore();
        ItemWrapper oldList = getListOfItemsOfUser(uuid);
        //adds item if user has a list
        if (oldList != null) {
            List<ItemModel> details = oldList.getItemModelList();
            details.add(updateItem);
            oldList.setItemModelList(details);
            ApiFuture<WriteResult> collectionsApiFuture = dbFireStore.collection("springItems").
                    document(uuid).set(oldList);
        } else {
            //adds item if user does not have a list
            updatedModel.add(updateItem);
            ItemWrapper wrapper = ItemWrapper.builder().itemModelList(updatedModel).build();
            ApiFuture<WriteResult> collectionsApiFuture = dbFireStore.collection("springItems").
                    document(uuid).set(wrapper);
        }
        return updateItem.getItemId();
    }

    public ItemWrapper getListOfItemsOfUser(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFireStore.collection("springItems").document(userId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        if (document.exists()) {
           return document.toObject(ItemWrapper.class);
        }
        return null;
    }

    //must include id of item you want to update in modal
    public String updateItem(String userId, ItemModel itemToUpdate) throws ExecutionException, InterruptedException {
        ItemWrapper itemsOfUser = getListOfItemsOfUser(userId);
        List<ItemModel> listOfItems = itemsOfUser.getItemModelList();
        ItemModel itemToReplace = null;
        for (ItemModel item : listOfItems) {
            if (item.getItemId().equalsIgnoreCase(itemToUpdate.getItemId())) itemToReplace = item;
        }
        if (itemToReplace != null){
            listOfItems.remove(itemToReplace);
            listOfItems.add(itemToUpdate);
            itemsOfUser.setItemModelList(listOfItems);
            Firestore dbFireStore = FirestoreClient.getFirestore();
            ApiFuture<WriteResult> collectionsApiFuture = dbFireStore.collection("springItems").
                    document(userId).set(itemsOfUser);
            return "Item updated!";
        }
        return "Item was not found!";
    }

    public List<ItemModel> getListOfAllItems() throws ExecutionException, InterruptedException, IOException {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        Iterable<DocumentReference> documentReference = dbFireStore.collection("springItems").listDocuments();
        List<ItemModel> listOfAllItems = new ArrayList<>();
        List<DocumentReference> docList = new ArrayList<>();
        documentReference.forEach(docList::add);
        for (DocumentReference doc : docList) {
            ApiFuture<DocumentSnapshot> future = doc.get();
            DocumentSnapshot document = future.get();
            if (document.exists()) {
                List<ItemModel> list = document.toObject(ItemWrapper.class).getItemModelList();
                list.forEach(item -> {
                    listOfAllItems.add(item);
                });
            }
        }
        return listOfAllItems;
    }

    public String postOneImage(String itemId, MultipartFile image, String userId) throws IOException, ExecutionException, InterruptedException {
        Bucket bucket = StorageClient.getInstance().bucket();
        String blobString = itemId + "/" + image.getOriginalFilename();
        bucket.create(blobString, image.getInputStream(), image.getContentType());
        String imageUrl = "https://firebasestorage.googleapis.com/v0/b/augiemarketplace.appspot.com/o/"+itemId+"%2F"+image.getOriginalFilename()+"?alt=media" +
                "&token=8c677b50-4ebd-4e4c-bf49-7bcb7dfb7532";
        postImageUrlToDb(imageUrl, userId, itemId);
        return  "uploaded one image";
    }

    public void postImageUrlToDb(String imageUrl, String userId, String itemId) throws ExecutionException, InterruptedException {
        ItemWrapper itemsOfUser = getListOfItemsOfUser(userId);
        List<ItemModel> listOfItems = itemsOfUser.getItemModelList();
        int index = 0;
        ItemModel itemToReplace = null;
        int count = 0;
        for (ItemModel item : listOfItems) {
            if (item.getItemId().equalsIgnoreCase(itemId)){
                itemToReplace = item;
                index = count;
            }
            count++;
        }
        if (itemToReplace != null){
            List<String> listOfUrls = new ArrayList<>();
            if (listOfUrls != null) listOfUrls = itemToReplace.getImageUrl();
            listOfUrls.add(imageUrl);
            itemToReplace.setImageUrl(listOfUrls);
            listOfItems.set(index, itemToReplace);
            itemsOfUser.setItemModelList(listOfItems);
            Firestore dbFireStore = FirestoreClient.getFirestore();
            ApiFuture<WriteResult> collectionsApiFuture = dbFireStore.collection("springItems").
                    document(userId).set(itemsOfUser);
        }
    }

    public String postMultipleImages(String itemId, MultipartFile[] images, String userId) throws IOException, ExecutionException, InterruptedException {
        for (MultipartFile currImage : images) {
            postOneImage(itemId, currImage, userId);
        }
        return  "uploaded multiple images";
    }

    public String deleteItem(String itemId, String userId) throws ExecutionException, InterruptedException {
        ItemWrapper items = getListOfItemsOfUser(userId);
        ItemModel itemToRemove = null;
        List<ItemModel> listOfItems = items.getItemModelList();
        for (ItemModel itemOfUser : listOfItems) {
            if (itemOfUser.getItemId().equalsIgnoreCase(itemId)) {
                itemToRemove = itemOfUser;
            }
        }
        if (itemToRemove != null) {
            listOfItems.remove(itemToRemove);
            items.setItemModelList(listOfItems);
            Firestore dbFireStore = FirestoreClient.getFirestore();
            ApiFuture<WriteResult> collectionsApiFuture = dbFireStore.collection("springItems").
                    document(userId).set(items);
            return "deleted!";
        }
        return "could not find item!";
    }

    public UserModel getInfoOfUser(String userId, String email) throws ExecutionException, InterruptedException {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFireStore.collection("users").document(email);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        if (document.exists()) {
            return document.toObject(UserModel.class);
        }
        return null;
    }
}
