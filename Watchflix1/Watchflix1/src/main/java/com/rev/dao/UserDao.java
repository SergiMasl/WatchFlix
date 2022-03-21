package com.rev.dao;

import com.rev.entity.User;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public class UserDao {
    private HibernateTemplate hibernateTemplate;

    public HibernateTemplate getHibernateTemplate() {
        return hibernateTemplate;
    }

    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    @Transactional
    public int insert(User user){
        // insert
        Integer integer = (Integer) this.hibernateTemplate.save(user);
        return integer;
    }

    // get all employee
    public List<User> getAllUsers(){
        List<User> list = hibernateTemplate.loadAll(User.class);
        return  list;
    }

    // get employee by id
    public User getEmployeeById(int id){
        User employee = hibernateTemplate.get(User.class, id);
        return employee;
    }

    // update employee
    @javax.transaction.Transactional
    public void updateUser(User updateUser){
        hibernateTemplate.update(updateUser);
    }


    @javax.transaction.Transactional
    public void deleteUser(int id){
        User user = getEmployeeById(id);
        hibernateTemplate.delete(user);
    }


}