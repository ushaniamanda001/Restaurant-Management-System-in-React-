package com.example.menuItemsdemo.mapper;

import com.example.menuItemsdemo.dto.MenuItemDto;
import com.example.menuItemsdemo.entity.MenuItem;

public class MenuItemMapper {
    public static MenuItemDto mapToMenuItemDto(MenuItem menuItem){
        return new MenuItemDto(
                menuItem.getMenuId(),
                menuItem.getMenuItemName(),
                menuItem.getDescription(),
                menuItem.getPrice()

        );
    }
    public static MenuItem mapToMenuItem(MenuItemDto menuItemDto){
        return new MenuItem(
                menuItemDto.getMenuId(),
                menuItemDto.getMenuItemName(),
                menuItemDto.getDescription(),
                menuItemDto.getPrice()
        );
    }


}
