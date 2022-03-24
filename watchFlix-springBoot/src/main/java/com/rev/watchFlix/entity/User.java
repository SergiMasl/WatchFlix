package com.rev.watchFlix.entity;

import lombok.*;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class User {
    @Id
    @GeneratedValue
    private int id;
    @Column(name="username", unique=true)
    public String username;
    @Column(name="email", unique=true)
    public String email;
    @Column(name="mobile", unique=true)
    public String mobile;
    @Column(name="country")
    public String country;
    @Column(name="gender")
    public String gender;
    @Column(name="subscribe")
    public boolean subscribe;
    @Column(name="isActive")
    public boolean isActive;
}