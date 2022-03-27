package com.rev.watchFlix.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(name = "test_admin",
        uniqueConstraints = @UniqueConstraint(
                name = "adminUser_unique",
                columnNames = "adminUsername"
        )
)
public class Admin {
    @Id
    @GeneratedValue
    public int adminId;
    @Column(name="adminName")
    private String adminName;
    @Column(name="adminUsername")
    public String adminUsername;
    @Column(name="adminPassword")
    public String adminPassword;
    @Column(name="adminEmail")
    public String adminEmail;

}