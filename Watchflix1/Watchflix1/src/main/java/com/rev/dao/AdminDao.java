package com.rev.dao;

import com.rev.entity.Admin;
import com.rev.entity.User;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public class AdminDao {

    private HibernateTemplate hibernateTemplate;

    public HibernateTemplate getHibernateTemplate() {
        return hibernateTemplate;
    }

    public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
        this.hibernateTemplate = hibernateTemplate;
    }

    @Transactional
    public int adminInsert(Admin admin){
        // insert
        Integer integer = (Integer) this.hibernateTemplate.save(admin);
        return integer;
    }
////////////////////////////Where Admin Creditentials kick in
    // get all employee
    public List<Admin> getAllAdmins(){
        List<Admin> adminList = hibernateTemplate.loadAll(Admin.class);
        return  adminList;
    }

    // get employee by id
    public Admin getAdminById(int id){
        Admin admin = hibernateTemplate.get(Admin.class, id);
        return admin;
    }

    // update employee
    @javax.transaction.Transactional
    public void updateAdmin(Admin updateAdmin){
        hibernateTemplate.update(updateAdmin);
    }

    /////////////Honestly dont think we even need to delete other admins\\\\\\\\\\\\\\\
    @javax.transaction.Transactional
    public void deleteAdmin(int id){
        Admin admin = getAdminById(id);
        hibernateTemplate.delete(admin);
    }


    /////////////////////////////All the User Functions\\\\\\\\\\\\\\\\\\\\\\\\\
    // get all employee
  /*  public List<User> getAllUsers(){
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
*/



}



