package com.rev.watchFlix.controller;

import com.rev.watchFlix.entity.User;
import com.rev.watchFlix.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/signupuser")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/signupuser/{id}")
    public User getUserById(@PathVariable("id") int id){
        return userService.getUserById(id);
    }

    @PostMapping("/signupuser")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @PutMapping("/signupuser/{id}")
    public String updateUser(@PathVariable("id") int id, @RequestBody User user){
        userService.updateUser(id, user);
        return "record updated successfully";
    }

    @DeleteMapping("/signupuser/{id}")
    public String deleteUser(@PathVariable("id") int id){
        userService.deleteUser(id);
        return "record deleted successfully";
    }



}