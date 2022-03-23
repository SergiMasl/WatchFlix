package com.rev.watchflix1spring.repository;

import com.rev.watchflix1spring.entity.Admin;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AdminRepositoryTest {

    @Autowired
    private AdminRepository adminRepository;

    @Test
    public void saveAdmin(){
       Admin admin = Admin.builder()
               .adminFirstName("cody")
               .adminLastName("atillo")
               .adminUsername("cody1")
               .adminPassword("pass1")
               .adminEmail("c@email.com")
               .adminCountry("USA")
               .adminRole("Admin")
               .build();
        adminRepository.save(admin);
    }



}