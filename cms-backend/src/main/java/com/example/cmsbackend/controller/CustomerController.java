package com.example.cmsbackend.controller;

import com.example.cmsbackend.dto.CustomerDto;
import com.example.cmsbackend.service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private CustomerService customerService;

    //Build Add Customer REST API
    @PostMapping
    public ResponseEntity<CustomerDto> createCustomer(@RequestBody CustomerDto customerDto){
        CustomerDto savedCustomer = customerService.createCustomer(customerDto);
        return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
    }
    //Buld Get Customer REST API
    @GetMapping("{id}")
    public ResponseEntity<CustomerDto> getCustomerById(Long customerId){
        CustomerDto customerDto = customerService.getCustomerById(customerId);
        return ResponseEntity.ok(customerDto);
    }

    //Build Get All Customers REST API
    @GetMapping
    public ResponseEntity<List<CustomerDto>> getAllCustomers(){
        List<CustomerDto> customers = customerService.getAllCustomers();
        return ResponseEntity.ok(customers);
    }

    //Build Update Customer REST API
    @PutMapping("{id}")
    public ResponseEntity<CustomerDto> updateCustomer(@PathVariable("id") Long customerId,
                                                       @RequestBody CustomerDto updatedCustomer){
       CustomerDto customerDto = customerService.updateCustomer(customerId, updatedCustomer);
       return ResponseEntity.ok(customerDto);
    }

    //Build Delete Customer REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteCustomer(@PathVariable("id") Long customerId){
        customerService.deleteCustomer(customerId);
        return ResponseEntity.ok("Customer Deleted Successfully! ");
    }
}
