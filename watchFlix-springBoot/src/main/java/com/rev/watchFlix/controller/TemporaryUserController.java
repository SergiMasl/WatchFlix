package com.rev.watchFlix.controller;

import com.rev.watchFlix.entity.TemporaryUser;
import com.rev.watchFlix.service.TempUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class TemporaryUserController {

    @Autowired
    private TempUserService tempUserService;


    @GetMapping("/tempUser/{id}")
    public TemporaryUser getEmployeeById(@PathVariable("id") int id){
        return tempUserService.getEmployeeById(id);
    }

    @PostMapping("/tempUser")
    public TemporaryUser addEmployee(@RequestBody TemporaryUser tempUSer){
        return tempUserService.addEmployee(tempUSer);
    }

    @PutMapping("/tempUser/{id}")
    public String updateEmployee(@PathVariable("id") int id, @RequestBody TemporaryUser tempUSer){
        tempUserService.updateEmployee(id, tempUSer);
        return "record updated successfully";
    }

    @DeleteMapping("/tempUser/{id}")
    public String deleteEmployee(@PathVariable("id") int id){
        tempUserService.deleteEmployee(id);
        return "record deleted successfully";
    }

}
