package com.augiemarketplace.augiemarketplaceapi.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemWrapper {
    private List<ItemModel> itemModelList = new ArrayList<>();
}
