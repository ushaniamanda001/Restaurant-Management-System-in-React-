package com.example.cmsbackend.service.impl;

import com.example.cmsbackend.dto.CustomerDto;
import com.example.cmsbackend.entity.Customer;
import com.example.cmsbackend.exception.ResourceNotFoundException;
import com.example.cmsbackend.mapper.CustomerMapper;
import com.example.cmsbackend.repository.CustomerRepository;
import com.example.cmsbackend.service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService{

    private CustomerRepository customerRepository;

    @Override
    public CustomerDto createCustomer(CustomerDto customerDto) {

        Customer customer = CustomerMapper.mapToCustomer(customerDto);
        Customer savedCustomer = customerRepository.save(customer);
        return CustomerMapper.mapToCustomerDto(savedCustomer);
    }

    @Override
    public CustomerDto getCustomerById(Long CustomerId) {
        Customer customer = customerRepository.findById(CustomerId)
                .orElseThrow(()-> new ResourceNotFoundException("Customer is not exists with given ID: " +CustomerId));
        return CustomerMapper.mapToCustomerDto(customer);
    }


    @Override
    public List<CustomerDto> getAllCustomers() {
        List<Customer> customers = customerRepository.findAll();
        return customers.stream().map((customer)-> CustomerMapper.mapToCustomerDto(customer)).collect(Collectors.toList());
    }

    @Override
    public CustomerDto updateCustomer(Long customerId, CustomerDto updatedCustomer) {
         Customer customer= customerRepository.findById(customerId).orElseThrow(()-> new ResourceNotFoundException("Customer is not exists given ID: " +customerId)
        );

         customer.setFirstName(updatedCustomer.getFirstName());
         customer.setLastName(updatedCustomer.getLastName());
         customer.setEmail(updatedCustomer.getEmail());
         customer.setContactNo(updatedCustomer.getContactNo());

         Customer updatedCustomerObj = customerRepository.save(customer);

        return CustomerMapper.mapToCustomerDto(updatedCustomerObj);
    }

    @Override
    public void deleteCustomer(Long customerId) {

        Customer customer= customerRepository.findById(customerId).orElseThrow(
                ()-> new ResourceNotFoundException("Customer is not exists given ID: " +customerId)
        );

        customerRepository.deleteById(customerId);

    }
}
