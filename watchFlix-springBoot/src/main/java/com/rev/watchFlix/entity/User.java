package com.rev.watchFlix.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class User {
    @Id
    @GeneratedValue
    private int id;
    @Column(name="username")
    public String username;
    @Column(name="email")
    public String email;
    @Column(name="mobile")
    public String mobile;
    @Column(name="country")
    public String country;
    @Column(name="gender")
    public String gender;
    @Column(name="subscribe")
    public boolean subscribe;
    @Column(name="isActive")
    @Value("false")
    public boolean isActive;
}