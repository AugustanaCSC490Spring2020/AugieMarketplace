package com.augiemarketplace.augiemarketplaceapi.service;

import com.augiemarketplace.augiemarketplaceapi.model.ItemModel;
import com.augiemarketplace.augiemarketplaceapi.model.ItemWrapper;
import com.augiemarketplace.augiemarketplaceapi.model.UserModel;
import com.augiemarketplace.augiemarketplaceapi.repository.AugieMarketRepo;
import com.google.api.core.ApiFuture;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.*;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.cloud.FirestoreClient;
import org.bson.types.ObjectId;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.logging.Logger;

@Service
public class AugieMarketService {

    private AugieMarketRepo userRepository;
    private Logger logger = Logger.getLogger(String.valueOf(AugieMarketService.class));

    public String postUserToFireBase(FirebaseToken decodedToken) {
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
                document(decodedToken.getUid()).set(fireBaseInfo);
        return decodedToken.getUid();
    }

    public String postItem(ItemModel itemModel, String uuid) throws ExecutionException, InterruptedException {
        List<ItemModel> updatedModel = new ArrayList<>();
        ItemModel updateItem = itemModel.builder()
                .itemId(new ObjectId().toString())
                .userId(uuid)
                .price(itemModel.getPrice())
                .isAvailable(itemModel.isAvailable())
                .name(itemModel.getName())
                .email(itemModel.getEmail())
                .description(itemModel.getDescription())
                .createdAt(Timestamp.now().toString())
                .build();
        Firestore dbFireStore = FirestoreClient.getFirestore();
        ItemWrapper oldList = getListOfItemsOfUser(uuid);
        List<ItemModel> details = oldList.getItemModelList();
        //adds item if user has a list
        if (details != null) {
            details.add(updateItem);
            oldList.setItemModelList(details);
            ApiFuture<WriteResult> collectionsApiFuture = dbFireStore.collection("springItems").
                    document(uuid).set(oldList);
        } else {
            //adds item if user does not have a list
            ItemWrapper wrapper = ItemWrapper.builder().itemModelList(updatedModel).build();
            ApiFuture<WriteResult> collectionsApiFuture = dbFireStore.collection("springItems").
                    document(uuid).set(wrapper);
        }
        return "success;";
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

    public ItemModel getItemsForUser(String userId) {
        return null;
    }
}
