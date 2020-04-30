package com.augiemarketplace.augiemarketplaceapi.controller;

import com.augiemarketplace.augiemarketplaceapi.model.ItemModel;
import com.augiemarketplace.augiemarketplaceapi.service.AugieMarketService;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.logging.Logger;

@RestController
public class AugieMarketController {
    private AugieMarketService augieMarketService;
    private AugieMarketService userService;
    private Logger logger = Logger.getLogger(String.valueOf(AugieMarketService.class));

    public AugieMarketController(AugieMarketService augieMarketService) {
        this.augieMarketService = augieMarketService;
    }

    @RequestMapping(value = "/post/item", method = RequestMethod.POST, produces = {"application/json"})
    public void postItemUser(@RequestBody ItemModel itemInfo, @RequestParam String userId)
            throws IOException {


    }

    //Returns unique user uuid
    @RequestMapping(value = "/verify/user", method = RequestMethod.GET, produces = {"application/json"})
    public String verifyUser(HttpServletRequest httpRequest)
            throws IOException {
        String token = httpRequest.getHeader("Authorization");
        token = token.replace("Bearer", "").trim();
        if (token.isEmpty() || token == null)  return "Authorization is required";
        try {
            FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(token);
            return augieMarketService.postUserToFireBase(decodedToken);
        } catch (Exception e ) {
            e.printStackTrace();
        }
        return null;
    }
}