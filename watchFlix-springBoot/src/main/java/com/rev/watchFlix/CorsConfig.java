package com.rev.watchFlix;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.support.SpringWebConstraintValidatorFactory;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class CorsConfig {

    public WebMvcConfigurer CorsConfig(){
        return new WebMvcConfigurerAdapter(){
            @Override
            public void addCorsMappings(CorsRegistry registry){
                registry.addMapping("/**").allowedOrigins("");
            }
        };
    }
}