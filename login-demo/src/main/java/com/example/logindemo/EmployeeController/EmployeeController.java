package com.example.logindemo.EmployeeController;

import com.example.logindemo.Dto.EmployeeDto;
import com.example.logindemo.Dto.LoginDto;
import com.example.logindemo.response.LoginMessage;
import com.example.logindemo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody EmployeeDto employeeDto)
    {
        String id = employeeService.addEmployee(employeeDto);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDto loginDto)
    {
        LoginMessage loginMessage = (LoginMessage) employeeService.loginEmployee(loginDto);
        return ResponseEntity.ok(loginMessage);
    }
}
