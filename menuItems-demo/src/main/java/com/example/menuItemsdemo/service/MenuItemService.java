package com.example.menuItemsdemo.service;

import com.example.menuItemsdemo.dto.MenuItemDto;

import java.util.List;

public interface MenuItemService {
    MenuItemDto createMenuItem(MenuItemDto menuItemDto);

    MenuItemDto getMenuItemById(Long MenuItemId);

    List<MenuItemDto> getAllMenuItems();

    MenuItemDto updateMenuItem(Long menuItemId, MenuItemDto updatedMenuItem);

    void deleteMenuItem(Long menuItemId);

}
