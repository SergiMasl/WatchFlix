package com.rev.watchFlix.UserClasses;

import com.rev.watchFlix.entity.User;
import com.rev.watchFlix.repository.UserRepository;
import com.rev.watchFlix.restservice.Greeting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class GetUSerProfile {
    @Autowired
    private UserRepository repository;

    @PostMapping("/getprofile")
    public void getStudentFNAmeByEmail(@RequestBody String email){
        String students = repository.getStudentFNAmeByEmail(email);
        System.out.println(students);
    }



//    @GetMapping("/greeting")
//    public GetUSerProfile greeting() {
//        return new Greeting( String.format(students));
//    }
}
