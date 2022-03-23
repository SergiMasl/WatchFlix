package com.rev.watchflix1spring.repository;

import com.rev.watchflix1spring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

    //should show all Admin function
    @Query(
            value = "SELECT * from test_user",
            nativeQuery = true
    )
    User getAllUser();


    //Get Role of user Admin function
    @Query(
            value = "SELECT * from test_user u where u.userRole = :userRole",
            nativeQuery = true
    )
    User getUserRole(
            @Param("userRole") String userRole
    );

    //Delete by id admin function
    @Query(
            value = "DELETE from test_user u where u.userId :userId",
            nativeQuery = true
    )
    User userDeleteById(
            @Param("userId") Long userId
    );


    //Get status if account is blocked or unblocked Admin FUnction
    @Query(
            value = "SELECT * from test_user u where u.blocked = :blocked",
            nativeQuery = true
    )
    User getUserBlockStat(
            @Param("blocked") boolean blocked
    );

    //Get status of user subscription Admin function
    @Query(
            value = "SELECT * from test_user u where u.subscribe = :subscribe",
            nativeQuery = true
    )
    User getUserSubscribeStat(
            @Param("subscribe") boolean subscribe
    );

    //The Start of the update functions
    //Made this quesries in hopes to save time if im able to actually implement them along with the
    //Angular that would be huge

    //Update the blocked status
    @Modifying
    @Query(

            value = "UPDATE test_user u SET u.subscribe = :userCountry WHERE u.userId = :userId;",
            nativeQuery = true
    )
    void updateSubscribeStat(@Param(value = "id") long userId, @Param(value = "subscribe") boolean subscribe);


    //Update the subscription status
    @Modifying
    @Query(

            value = "UPDATE test_user u SET u.blocked = :userCountry WHERE u.userId = :userId;",
            nativeQuery = true
    )
    void updateBlockStat(@Param(value = "id") long userId, @Param(value = "blocked") boolean blocked);





    @Modifying
    @Query(

            value = "UPDATE test_user u SET u.userFirstName = :userFirstName WHERE u.userId = :userId;",
            nativeQuery = true
    )
    void updateUserFirstName(@Param(value = "id") long userId, @Param(value = "userFirstName") String userFirstName);

    @Modifying
    @Query(

            value = "UPDATE test_user u SET u.userLastName = :userLastName WHERE u.userId = :userId;",
            nativeQuery = true
    )
    void updateUserLastName(@Param(value = "id") long userId, @Param(value = "userLastName") String userLastName);

    @Modifying
    @Query(

            value = "UPDATE test_user u SET u.userUsername = :userUsername WHERE u.userId = :userId;",
            nativeQuery = true
    )
    void updateUserUsername(@Param(value = "id") long userId, @Param(value = "userUsername") String userUsername);

    @Modifying
    @Query(

            value = "UPDATE test_user u SET u.userPassword = :userPassword WHERE u.userId = :userId;",
            nativeQuery = true
    )
    void updateUserPassword(@Param(value = "id") long userId, @Param(value = "userPassword") String userPassword);


    @Modifying
    @Query(

            value = "UPDATE test_user u SET u.userEmail = :userEmail WHERE u.userId = :userId;",
            nativeQuery = true
    )
    void updateUserEmail(@Param(value = "id") long userId, @Param(value = "userEmail") String userEmail);

    @Modifying
    @Query(

            value = "UPDATE test_user u SET u.userCountry = :userCountry WHERE u.userId = :userId;",
            nativeQuery = true
    )
    void updateUserCountry(@Param(value = "id") long userId, @Param(value = "userCountry") String UserCountry);

}