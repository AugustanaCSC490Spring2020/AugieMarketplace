package com.augiemarketplace.augiemarketplaceapi.controller;

import com.augiemarketplace.augiemarketplaceapi.model.ItemModel;
import com.augiemarketplace.augiemarketplaceapi.model.ItemWrapper;
import com.augiemarketplace.augiemarketplaceapi.service.AugieMarketService;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.nio.file.Path;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.logging.Logger;

@RestController
public class AugieMarketController {
    private AugieMarketService augieMarketService;
    private Logger logger = Logger.getLogger(String.valueOf(AugieMarketService.class));

    public AugieMarketController(AugieMarketService augieMarketService) {
        this.augieMarketService = augieMarketService;
    }

    @RequestMapping(value = "/post/item", method = RequestMethod.POST, produces = {"application/json"})
    public String postItemUser(@RequestBody ItemModel itemInfo, @RequestParam(value = "userId") String uuid)
            throws IOException, ExecutionException, InterruptedException {
        return augieMarketService.postItem(itemInfo, uuid);
    }

    @RequestMapping(value = "/list/items/user", method = RequestMethod.POST, produces = {"application/json"})
    public ItemWrapper getListOfItemsOfUser(@RequestParam(value = "userId") String userId)
            throws IOException, ExecutionException, InterruptedException {
        return augieMarketService.getListOfItemsOfUser(userId);
    }

    @RequestMapping(value = "/list/items/all", method = RequestMethod.GET, produces = {"application/json"})
    public List<ItemModel> getListOfAllItems()
            throws IOException, ExecutionException, InterruptedException {
        return augieMarketService.getListOfAllItems();
    }

    //must include itemId in Modal
    @RequestMapping(value = "/update/item", method = RequestMethod.PUT, produces = {"application/json"})
    public String updateItem(@RequestParam(value = "userId") String userId, @RequestBody ItemModel updatedItem)
            throws IOException, ExecutionException, InterruptedException {
        return augieMarketService.updateItem(userId, updatedItem);
    }

    @RequestMapping(value = "/delete/item", method = RequestMethod.DELETE, produces = {"application/json"})
    public String deleteItem(@RequestParam(value = "itemId") String itemId, @RequestParam String userId)
            throws IOException, ExecutionException, InterruptedException {
        return augieMarketService.deleteItem(itemId, userId);
    }

    @RequestMapping(value = "/post/multiple/images", method = RequestMethod.POST, produces = {"application/json"})
    public String postImagesOfItem(@RequestParam(value = "itemId") String itemId, @RequestParam("images") MultipartFile[]  images)
            throws IOException, ExecutionException, InterruptedException {
        return augieMarketService.postImagesOfItem(itemId, images);
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