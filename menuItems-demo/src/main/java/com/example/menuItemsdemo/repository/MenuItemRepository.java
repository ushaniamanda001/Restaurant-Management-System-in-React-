package com.example.menuItemsdemo.repository;

import com.example.menuItemsdemo.entity.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {

}
