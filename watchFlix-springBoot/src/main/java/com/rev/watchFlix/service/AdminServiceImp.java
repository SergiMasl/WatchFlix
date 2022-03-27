package com.rev.watchFlix.service;

import com.rev.watchFlix.entity.Admin;
import com.rev.watchFlix.entity.User;
import com.rev.watchFlix.repository.AdminRepository;
import com.rev.watchFlix.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImp implements AdminService{

    @Autowired
    public AdminRepository adminRepository;
    @Autowired
    public UserRepository userRepository;


    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<Admin> getAdmins() {
        return adminRepository.findAll();
    }

    @Override
    public void updateUser(int id, User user) {

    }

    @Override
    public Admin addAdmin(Admin admin) {
        return adminRepository.save(admin);
    }


    @Override
    public Admin getAdminById(int id) {
        return adminRepository.findById(id).get();
    }



    @Override
    public void updateAdmin(int id, Admin user) {

    }

    @Override
    public void deleteAdmin(int id) {
        adminRepository.deleteById(id);
    }

    @Autowired
    private AdminRepository checkinAdmin;


}