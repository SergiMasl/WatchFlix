package com.rev.watchFlix.mailAuthoSender;

import com.rev.watchFlix.entity.TemporaryUser;
import com.rev.watchFlix.repository.TempUserRep;
import com.rev.watchFlix.service.TempUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CheckEmail {
    private String alert;

    @Autowired
    private TempUserRep rep;


    @PostMapping("verifnum/:email")
    public String postBody(@RequestBody TemporaryUser objOfReq) {
        //step 1. is num && email correct?

        checkVerfNumAndEmail(objOfReq.getEmail(), objOfReq.getSecurityNumber());
        return alert;
    }


    //Step 1 ->
    public void checkVerfNumAndEmail(String email, String security_number) {
        String numVer = rep.checkVerfNumAndEmail(email, security_number);
        if(numVer == null) {
            //return false
            System.out.println("Wrong number");
            alert = "409";
        } else {
            //return true
            System.out.println("Success");

            alert = "200";
        }
    }
}
