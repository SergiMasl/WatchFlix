package com.rev.watchFlix;
// ./mvnw spring-boot:run

import com.rev.watchFlix.mailAuthoSender.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class WatchFlixApplication {

	public static void main(String[] args) {
		SpringApplication.run(WatchFlixApplication.class, args);
	}

	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}



	//********Email auto sender********

	//Number gen
	int min = 1000;
	int max = 9999;
	int b = (int)(Math.random()*(max-min+1)+min);
	//
	private String toMail ="maslinikovsergey@gmail.com";
	private String toBodyTextMail = String.valueOf(b);

	@Autowired
	private EmailSenderService senderService;

	@EventListener(ApplicationReadyEvent.class)
	public  void sendMail(){
		senderService.sendEmail(toMail, "This is subject", toBodyTextMail);
	}
	//******** THE END of Email auto sender********
}