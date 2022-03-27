package com.rev.watchFlix.repository;

import com.rev.watchFlix.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {

}
