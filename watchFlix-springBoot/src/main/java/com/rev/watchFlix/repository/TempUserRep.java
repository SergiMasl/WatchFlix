package com.rev.watchFlix.repository;

import com.rev.watchFlix.entity.TemporaryUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TempUserRep extends JpaRepository<TemporaryUser, Integer> {
}
