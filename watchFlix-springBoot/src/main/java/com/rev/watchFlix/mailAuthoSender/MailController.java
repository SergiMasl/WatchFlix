package com.rev.watchFlix.mailAuthoSender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MailController {

	@Autowired
	private EmailSenderService senderService;

	private String secNum;

	@PostMapping("/sendEmail")
	public String postBody(@RequestBody String email) {
		getNum();
		recordTempUSer(email);
		senderService.sendEmail(email, "This is subject", getNum());
		return email;
	}

	//********Email auto sender********
	public String getNum() {
		int min = 1000;
		int max = 9999;
		int b = (int) (Math.random() * (max - min + 1) + min);
		secNum = String.valueOf(b);
		return String.valueOf(b);
	}

	public void recordTempUSer(String email) {
		CheckEmail checkEmail = new CheckEmail();
		checkEmail.checkEmail(secNum, email);

		secNum = "";
	}
}

