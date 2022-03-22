package com.rev.watchFlix.mailAuthoSender;

import com.rev.watchFlix.entity.TemporaryUser;
import com.rev.watchFlix.service.TempUserService;
import com.rev.watchFlix.service.TempUserServiceImp;
import org.springframework.web.bind.annotation.PostMapping;

public class CheckEmail {

    @PostMapping("/sendEmail")
    public boolean checkEmail(String secNum, String emailForSend){
        System.out.println("Record Temp User in Database");



//        TemporaryUser userForRec = new TemporaryUser();
//        userForRec.setEmail(emailForSend);
//        userForRec.setSecurityNumber(secNum);
//
//        System.out.println(userForRec.getEmail());
//        System.out.println(userForRec.getSecurityNumber());

//        TempUserServiceImp ff = new TempUserServiceImp();
//        ff.addEmployee(userForRec);


        return false;
    }
}
