package com.rev.watchFlix.repository;

import com.rev.watchFlix.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(
            value= "SELECT * FROM User s where s.username = ?1",
            nativeQuery = true
    )
    String getStudentFNAmeByEmail(String username);

    @Query(
            value= "SELECT * FROM User s where s.mobile = ?1",
            nativeQuery = true
    )
    String getStudentFNAmeByPhone(String phone);

    @Query(
            value= "SELECT * FROM User s where s.username = ?1 and s.password = ?2",
            nativeQuery = true
    )
    User getUserByUNameAndPass(String username, String password);

    @Query(
            value= "SELECT * FROM User s where s.username = ?1",
            nativeQuery = true
    )
    User getUserByUName(String username);



    @Query(
            value= "UPDATE User SET country=?2 name=?3 mobile=?4 WHERE s.username=?1",
            nativeQuery = true
    )
    User updateUser(String username,String country, String name, String mobile);

}

