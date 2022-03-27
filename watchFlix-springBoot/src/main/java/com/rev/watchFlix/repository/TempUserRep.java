package com.rev.watchFlix.repository;

import com.rev.watchFlix.entity.TemporaryUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TempUserRep extends JpaRepository<TemporaryUser, Integer> {

    @Query(
            value= "SELECT * FROM temporary_user s where s.email=?1",
            nativeQuery = true
    )
    String checkVerfNum(String email, String security_number);

    @Query(
            value= "SELECT * FROM temporary_user s where s.email=?1 and s.security_number=?2",
            nativeQuery = true
    )
    String checkVerfNumAndEmail(String email, String security_number);

}