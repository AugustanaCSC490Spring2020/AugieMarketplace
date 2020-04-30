package com.augiemarketplace.augiemarketplaceapi.service;

import com.augiemarketplace.augiemarketplaceapi.model.UserModel;
import com.augiemarketplace.augiemarketplaceapi.repository.AugieMarketRepo;
import com.google.api.core.ApiFuture;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class AugieMarketService {

    private AugieMarketRepo userRepository;
    private Logger logger = Logger.getLogger(String.valueOf(AugieMarketService.class));


    public AugieMarketService(AugieMarketRepo userRepository) {
        this.userRepository = userRepository;
    }


    public String postUserToFireBase(FirebaseToken decodedToken) {
        UserModel fireBaseInfo = UserModel.builder()
                .uuid(decodedToken.getUid())
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
}
