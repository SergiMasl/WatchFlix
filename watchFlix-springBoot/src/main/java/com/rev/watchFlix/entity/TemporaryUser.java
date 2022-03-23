package com.rev.watchFlix.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class TemporaryUser {
        @Id
        @GeneratedValue
        private int id;
        private String securityNumber;
        private String email;
        private String isExist;

}


