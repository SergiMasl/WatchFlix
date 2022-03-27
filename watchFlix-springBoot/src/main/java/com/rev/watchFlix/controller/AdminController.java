package com.rev.watchFlix.controller;

import com.rev.watchFlix.entity.Admin;
import com.rev.watchFlix.entity.User;
import com.rev.watchFlix.repository.AdminRepository;
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
    private AdminRepository checkinAdmin;

    @Autowired
    private UserService userService;


    @GetMapping("/showadmin")
    public List<Admin> getAdmins() {
        return adminService.getAdmins();
    }


    @PostMapping("/addAdmin")
    public String addAdmin(@RequestBody Admin admin) {
        System.out.println(admin);
        String status;
        try {
            adminService.addAdmin(admin);
            status = "{\"status\":\"Success\"}";
        } catch (Exception e){
            status = "{\"status\":\"Error\"}";
        }
        return status;
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
        return "{\"status\":\"record deleted successfull\"}";
    }

    @PostMapping("/loginadmin")
    public Admin adminlogIn(@RequestBody Admin admin){
        Admin hero;
        if(admin == null){
            hero = null;
        } else {
            //step 2. check user by username & pass
            hero = checkinAdmin.getAdminByUNameAndPass(admin.getAdminUsername(), admin.adminPassword);
        }
        //step 3. req user
        return hero;
    }

    //View profile
    //set 1. get {} from front
    @PostMapping("/viewadminprof")
    public Admin viewadminProf(@RequestBody Admin admin){
        Admin hero;
        if(admin == null){
            hero = null;
        } else {
            //step 2. check user by username & pass
            hero = checkinAdmin.getAdminByUName(admin.getAdminUsername());
            System.out.println(hero);
        }
        //step 3. req user
        return hero;
    }


}
