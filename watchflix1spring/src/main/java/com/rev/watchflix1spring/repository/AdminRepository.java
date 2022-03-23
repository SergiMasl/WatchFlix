package com.rev.watchflix1spring.repository;

import com.rev.watchflix1spring.entity.Admin;
import com.rev.watchflix1spring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AdminRepository extends JpaRepository<Admin, Long> {

    //should show all
    @Query(
            value = "SELECT * from test_admin",
            nativeQuery = true
    )
    User getAllAdmin();

    @Modifying
   @Query(

           value = "UPDATE test_admin a SET a.adminFirstName = :adminFirstName WHERE a.adminId = :adminId;",
           nativeQuery = true
    )
    void updateAdminFirstName(@Param(value = "id") long adminId, @Param(value = "adminFirstName") String adminFirstName);

    @Modifying
    @Query(

            value = "UPDATE test_admin a SET a.adminLastName = :adminLastName WHERE a.adminId = :adminId;",
            nativeQuery = true
    )
    void updateAdminLastName(@Param(value = "id") long adminId, @Param(value = "adminLastName") String adminLastName);

    @Modifying
    @Query(

            value = "UPDATE test_admin a SET a.adminUsername = :adminUsername WHERE a.adminId = :adminId;",
            nativeQuery = true
    )
    void updateAdminUsername(@Param(value = "id") long adminId, @Param(value = "adminUsername") String adminUsername);

    @Modifying
    @Query(

            value = "UPDATE test_admin a SET a.adminPassword = :adminPassword WHERE a.adminId = :adminId;",
            nativeQuery = true
    )
    void updateAdminPassword(@Param(value = "id") long adminId, @Param(value = "adminPassword") String adminPassword);


    @Modifying
    @Query(

            value = "UPDATE test_admin a SET a.adminEmail = :adminEmail WHERE a.adminId = :adminId;",
            nativeQuery = true
    )
    void updateAdminEmail(@Param(value = "id") long adminId, @Param(value = "adminEmail") String adminEmail);

    @Modifying
    @Query(

            value = "UPDATE test_admin a SET a.adminCountry = :adminCountry WHERE a.adminId = :adminId;",
            nativeQuery = true
    )
    void updateAdminCountry(@Param(value = "id") long adminId, @Param(value = "adminCountry") String adminCountry);


   /*@Modifying
   @Query("update Customer u set u.phone = :phone where u.id = :id")
   void updatePhone(@Param(value = "id") long id, @Param(value = "phone") String phone);
   */






}
