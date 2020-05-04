package com.augiemarketplace.augiemarketplaceapi.model;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UserModel {
    private String userId;
    private String name;
    private String email;
    private String picture;
    private String issuer;
    private boolean isEmailVerified;
    private String createdAt;
}
