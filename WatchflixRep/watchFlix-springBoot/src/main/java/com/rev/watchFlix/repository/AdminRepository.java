package com.rev.watchFlix.repository;

import com.rev.watchFlix.entity.Admin;
import com.rev.watchFlix.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {

    @Query(
            value= "SELECT * FROM test_admin a where a.admin_username = ?1",
            nativeQuery = true
    )
    Admin getAdminByUName(String adminUsername);

    @Query(
            value= "SELECT * FROM test_admin s where s.admin_username = ?1",
            nativeQuery = true
    )
    String getAdminFNAmeByEmail(String adminUsername);


    @Query(
            value= "SELECT * FROM test_admin s where s.admin_username = ?1 and s.admin_password = ?2",
            nativeQuery = true
    )
    Admin getAdminByUNameAndPass(String adminUsername, String adminPassword);


    @Query(
            value= "update test_admin s set s.admin_password=?2 WHERE s.username=?1",
            nativeQuery = true
    )
    Admin updateAdmin(String adminUsername, String adminPassword);


}
