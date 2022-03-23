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

    @Autowired
    private TempUserRep rep;


    @PostMapping("verifnum/:email")
    public TemporaryUser postBody(@RequestBody TemporaryUser objOfReq) {
        //step 1. is num && email correct?

        checkVerfNumAndEmail(objOfReq.getEmail(), objOfReq.getSecurityNumber());

        return objOfReq;
    }


    //Step 1 ->
    @Autowired
    private TempUserService tempUserService;
    public void checkVerfNumAndEmail(String email, String security_number) {
        String numVer = rep.checkVerfNumAndEmail(email, security_number);
        System.out.println("email: " + email);
        System.out.println("security_number: " + security_number);
        System.out.println("START: " + numVer);
        if(numVer == null) {
            //return false
            System.out.println("Frong number");
        } else {
            //return true
            System.out.println("Success");

            String[] arrOfStr = numVer.split(",");
            TemporaryUser tt = new TemporaryUser();
            tt.setEmail(email);
            tt.setIsExist("true");
            tt.setSecurityNumber(security_number);
            tempUserService.updateEmployee(Integer.parseInt(arrOfStr[0]),tt);
        }


    }
}
