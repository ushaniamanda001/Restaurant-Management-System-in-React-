package com.example.cmsbackend.service;

import com.example.cmsbackend.dto.CustomerDto;

import java.util.List;

public interface CustomerService {
    CustomerDto createCustomer(CustomerDto customerDto);

    CustomerDto getCustomerById(Long EmployeeId);

    List<CustomerDto> getAllCustomers();

    CustomerDto updateCustomer(Long customerId, CustomerDto updatedCustomer);

    void deleteCustomer(Long customerId);
}
