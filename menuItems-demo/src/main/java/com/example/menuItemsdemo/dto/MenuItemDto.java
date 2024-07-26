package com.example.menuItemsdemo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class MenuItemDto {
    private Long menuId;
    private String menuItemName;
    private String description;
    private double price;


}
