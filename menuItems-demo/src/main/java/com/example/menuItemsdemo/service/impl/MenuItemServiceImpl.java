package com.example.menuItemsdemo.service.impl;

import com.example.menuItemsdemo.dto.MenuItemDto;
import com.example.menuItemsdemo.exception.ResourceNotFoundException;
import com.example.menuItemsdemo.mapper.MenuItemMapper;
import com.example.menuItemsdemo.repository.MenuItemRepository;
import com.example.menuItemsdemo.service.MenuItemService;
import com.example.menuItemsdemo.entity.MenuItem;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MenuItemServiceImpl implements MenuItemService {
    private MenuItemRepository menuItemRepository;

    @Override
    public MenuItemDto createMenuItem(MenuItemDto menuItemDto) {
        MenuItem menuItem = MenuItemMapper.mapToMenuItem(menuItemDto);
        MenuItem savedMenuItem = menuItemRepository.save(menuItem);
        return MenuItemMapper.mapToMenuItemDto(savedMenuItem);
    }

    @Override
    public MenuItemDto getMenuItemById(Long MenuItemId) {
        MenuItem menuItem = menuItemRepository.findById(MenuItemId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee is not exists with given ID: " + MenuItemId));
        return MenuItemMapper.mapToMenuItemDto(menuItem);
    }

    @Override
    public List<MenuItemDto> getAllMenuItems() {
        List<MenuItem> menuItems = menuItemRepository.findAll();
        return menuItems.stream().map((menuItem) -> MenuItemMapper.mapToMenuItemDto(menuItem)).collect(Collectors.toList());
    }


    @Override
    public MenuItemDto updateMenuItem(Long menuItemId, MenuItemDto updatedMenuItem) {
        MenuItem menuItem = menuItemRepository.findById(menuItemId).orElseThrow(() -> new ResourceNotFoundException("Menu Item is not exists given ID: " + menuItemId));
        menuItem.setMenuItemName(updatedMenuItem.getMenuItemName());
        menuItem.setDescription(updatedMenuItem.getDescription());
        menuItem.setPrice(updatedMenuItem.getPrice());

        MenuItem updatedMenuItemObj = menuItemRepository.save(menuItem);
        return MenuItemMapper.mapToMenuItemDto(updatedMenuItemObj);
    }

    @Override
    public void deleteMenuItem(Long menuItemId){
        MenuItem menuItem = menuItemRepository.findById(menuItemId).orElseThrow(
                ()-> new ResourceNotFoundException("Menu Item is not exists given ID: " +menuItemId)
        );
        menuItemRepository.deleteById(menuItemId);
    }
}
