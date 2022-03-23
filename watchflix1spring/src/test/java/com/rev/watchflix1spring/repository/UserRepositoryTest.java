package com.rev.watchflix1spring.repository;


import com.rev.watchflix1spring.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void saveuser(){
    /*    User user = User.builder()
                .userFirstName("Ufname")
                .userLastName("Ulname")
                .userUsername("useruserCHECK")
                .userPassword("userpass1")
                .userEmail("USER@email.com")
                .userCountry("JAPAN")
                .subscribe(false)
                .blocked(false)
                .userRole("User")
                .build();
        userRepository.save(user);*/
    }


    @Test
    public void getAllUsers(){
        List<User> user = userRepository.findAll();
        System.out.println(user);
    }

    @Test
    public void userDelete(){

    }



}