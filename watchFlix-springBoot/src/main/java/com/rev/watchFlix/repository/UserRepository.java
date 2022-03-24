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

}

