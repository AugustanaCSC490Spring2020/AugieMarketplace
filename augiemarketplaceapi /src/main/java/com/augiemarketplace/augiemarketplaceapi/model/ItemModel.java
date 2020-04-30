package com.augiemarketplace.augiemarketplaceapi.model;

import com.google.cloud.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemModel {
    private String itemId;
    private String userId;
    private String name;
    private String description;
    private String price;
    private String email;
    private String createdAt = Timestamp.now().toString();
    private boolean isAvailable;
}
