package com.example.logindemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude =SecurityAutoConfiguration.class)
public class LoginDemoApplication{

	public static void main(String[] args) {
		SpringApplication.run(LoginDemoApplication.class, args);
	}

}
