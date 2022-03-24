package com.rev.watchFlix.controller;

import com.rev.watchFlix.entity.TemporaryUser;
import com.rev.watchFlix.entity.User;
import com.rev.watchFlix.repository.TempUserRep;
import com.rev.watchFlix.repository.UserRepository;
import com.rev.watchFlix.service.TempUserService;
import com.rev.watchFlix.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
    @Autowired
    private TempUserRep rep;
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


    //ADD USER
    String alert;
    @Autowired
    private TempUserService tempUserService;
    @Autowired
    private UserRepository checkinUser;

    @PostMapping("/signupuser")
    public String addUser(@RequestBody User user){
        //Checking tempUSer
        String numVer = rep.checkVerfNum(user.getEmail(), "");
        //check correct username && phone
        String userNAme = checkinUser.getStudentFNAmeByEmail(user.getUsername());
        String phone = checkinUser.getStudentFNAmeByPhone(user.getUsername());

        if(userNAme == null && phone == null){
//            change isExist => true
            String[] arrOfStr = numVer.split(",");
            TemporaryUser tt = new TemporaryUser();
            tt.setEmail(arrOfStr[1]);
            tt.setIsExist("true");
            tt.setSecurityNumber(arrOfStr[3]);
            tempUserService.updateEmployee(Integer.parseInt(arrOfStr[0]),tt);

            //Create user

            userService.addUser(user);

            alert = "200";
        } else {
            alert = "401";
        }
        return alert;
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