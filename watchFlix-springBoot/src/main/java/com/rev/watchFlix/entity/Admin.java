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
    @SequenceGenerator(
            name ="admin_sequence",
            sequenceName = "admin_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "admin_sequence"
    )
    public int adminId;
    //so im probably going to throw ID USER and PASS together embedd the rest
    //making it easier to view the database
    @Column(name="adminName")
    private String adminName;
    @Column(name="adminUsername")
    public String adminUsername;
    @Column(name="adminPassword")
    public String adminPassword;
    @Column(name="adminEmail")
    public String adminEmail;

}