package com.rev.watchFlix;
// ./mvnw spring-boot:run


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class WatchFlixApplication {

	public static void main(String[] args) {
		SpringApplication.run(WatchFlixApplication.class, args);
	}

}