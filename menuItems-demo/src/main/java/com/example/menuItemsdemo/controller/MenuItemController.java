package com.example.menuItemsdemo.controller;

import com.example.menuItemsdemo.dto.MenuItemDto;
import com.example.menuItemsdemo.service.MenuItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin ("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/menuitems")
public class MenuItemController {
    private MenuItemService menuItemService;

    @PostMapping
    public ResponseEntity<MenuItemDto> createMenuItem(@RequestBody MenuItemDto menuItemDto){
        MenuItemDto savedMenuItem = menuItemService.createMenuItem(menuItemDto);
        return new ResponseEntity<>(savedMenuItem, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<MenuItemDto> getMenuItemById(Long menuItemId){
        MenuItemDto menuItemDto = menuItemService.getMenuItemById(menuItemId);
        return ResponseEntity.ok(menuItemDto);
    }
    @GetMapping
    public ResponseEntity<List<MenuItemDto>> getAllMenuItems(){
        List<MenuItemDto> menuItems = menuItemService.getAllMenuItems();
        return ResponseEntity.ok(menuItems);
    }
    @PutMapping("{id}")
    public ResponseEntity<MenuItemDto> updateMenuItem(@PathVariable("id") Long menuItemId,
                                                      @RequestBody MenuItemDto updatedMenuItem){
        MenuItemDto menuItemDto = menuItemService.updateMenuItem(menuItemId, updatedMenuItem);
        return ResponseEntity.ok(menuItemDto);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteMenuItem(@PathVariable("id") Long menuItemId){
        menuItemService.deleteMenuItem(menuItemId);
        return ResponseEntity.ok("Menu Item Deleted Successfully..!");
    }
}
