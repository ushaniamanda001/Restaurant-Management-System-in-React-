package com.example.logindemo.service;

import com.example.logindemo.Dto.EmployeeDto;
import com.example.logindemo.Dto.LoginDto;
import com.example.logindemo.response.LoginMessage;

public interface EmployeeService {
    String addEmployee(EmployeeDto employeeDto);
    LoginMessage loginEmployee(LoginDto loginDTO);
}
