package com.example.cmsbackend.repository;

import com.example.cmsbackend.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
