package com.rev.watchFlix.mailAuthoSender;

import com.rev.watchFlix.entity.TemporaryUser;
import com.rev.watchFlix.repository.TempUserRep;
import com.rev.watchFlix.restservice.Greeting;
import com.rev.watchFlix.service.TempUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.management.DynamicMBean;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MailController {
	private boolean secVerfIsOk = false;
	private String alert;
	@Autowired
	private EmailSenderService senderService;

	private String secNum;

	@PostMapping("/sendEmail")
	public String postBody(@RequestBody String email) {
		String num = getNum();
		postVerfNum(email, secNum);
		if (secVerfIsOk){
			senderService.sendEmail(email, "This is subject", num);
		}
		return alert;
	}

	//********Email auto sender********
	public String getNum() {
		int min = 1000;
		int max = 9999;
		int b = (int) (Math.random() * (max - min + 1) + min);
		secNum = String.valueOf(b);
		return String.valueOf(b);
	}

	@Autowired
	private TempUserRep rep;

	@Autowired
	private TempUserService tempUserService;
	public void postVerfNum(String email, String security_number){
		String numVer = rep.checkVerfNum(email, security_number);

		if(numVer == null){
			TemporaryUser tt = new TemporaryUser();
			tt.setEmail(email);
			tt.setSecurityNumber(security_number);
			tt.setIsExist("false");
			tempUserService.addEmployee(tt);
			secVerfIsOk = true;
			alert = "200";
		} else {
			String[] arrOfStr = numVer.split(",");
			String isExist = arrOfStr[2];
			if(isExist.equals("false")){
				TemporaryUser tt = new TemporaryUser();
				tt.setEmail(email);
				tt.setIsExist("false");
				tt.setSecurityNumber(security_number);
				tempUserService.updateEmployee(Integer.parseInt(arrOfStr[0]),tt);
				secVerfIsOk = true;
				alert = "200";
			} else {
				//RETURN USER ALREADY EXIST
				System.out.println("RETURN USER ALREADY EXIST");
				alert = "408";
				secVerfIsOk = false;

			}
		}
	}
}

