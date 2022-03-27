package com.rev.watchFlix.controller;

import com.rev.watchFlix.entity.Admin;
import com.rev.watchFlix.entity.User;
import com.rev.watchFlix.repository.UserRepository;
import com.rev.watchFlix.service.AdminService;
import com.rev.watchFlix.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping
public class AdminController {


    @Autowired
    private AdminService adminService;

    @Autowired
    private UserService userService;


    @GetMapping("/showadmin")
    public List<Admin> getAdmins() {
        return adminService.getAdmins();
    }

    @GetMapping("/showadmin/{id}")
    public Admin getAdminById(@PathVariable("id") int id) {
        return adminService.getAdminById(id);
    }


    //user stuff
    @GetMapping("/adminviewall")
    public List<User> getUsers() {
        return adminService.getUsers();
    }

    @DeleteMapping("/adminviewall/{id}")
    public String deleteUserview(@PathVariable("id") int id){
        userService.deleteUser(id);
        return "record deleted successfully";
    }







}
