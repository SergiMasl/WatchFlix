package com.rev.watchflix1spring.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor


@Entity
@Table(name = "test_user",
        uniqueConstraints = @UniqueConstraint(
                name = "userUser_unique",
                columnNames = "userUsername"
        )
)
public class User {

    @Id
    @SequenceGenerator(
            name ="user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    public Long userId;
    //so im probably going to throw ID USER and PASS together embedd the rest
    //making it easier to view the database
    private String userFirstName;
    private String userLastName;
    public String userUsername;
    public String userPassword;
    public String  userEmail;
    public String  userCountry;
    public boolean subscribe;
    public boolean blocked;
    public String userRole;

}
