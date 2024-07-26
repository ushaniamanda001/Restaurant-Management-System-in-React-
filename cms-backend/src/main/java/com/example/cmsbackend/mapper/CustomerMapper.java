package com.example.cmsbackend.mapper;

import com.example.cmsbackend.dto.CustomerDto;
import com.example.cmsbackend.entity.Customer;

public class CustomerMapper {
    public static CustomerDto mapToCustomerDto(Customer customer){
        return new CustomerDto(
                customer.getId(),
                customer.getFirstName(),
                customer.getLastName(),
                customer.getEmail(),
                customer.getContactNo()

        );

    }
    public static Customer mapToCustomer(CustomerDto customerDto){
        return new Customer(
                customerDto.getId(),
                customerDto.getFirstName(),
                customerDto.getLastName(),
                customerDto.getEmail(),
                customerDto.getContactNo()
        );
    }
}
