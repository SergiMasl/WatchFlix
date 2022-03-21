package com.rev.watchFlix.mailAuthoSender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;

@Service
public class EmailSenderService {
    @Autowired
    private JavaMailSender mailSender;

    public  void sendEmail(String toEmail, String subject, String body){
        System.out.println("Mail got!!!...");
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("sergimasli@gmail.com");
        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText(body);

        System.out.println(message);
        mailSender.send(message);
        System.out.println("Mail sent!!!...");

    }



}
