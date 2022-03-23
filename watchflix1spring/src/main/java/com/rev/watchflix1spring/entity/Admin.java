package com.rev.watchflix1spring.entity;


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
    public Long adminId;
    //so im probably going to throw ID USER and PASS together embedd the rest
    //making it easier to view the database
    private String adminFirstName;
    private String adminLastName;
    public String adminUsername;
    public String adminPassword;
    public String adminEmail;
    public String adminCountry;
    public String adminRole;

}
