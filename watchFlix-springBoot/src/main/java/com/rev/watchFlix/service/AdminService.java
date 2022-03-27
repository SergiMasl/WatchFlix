package com.rev.watchFlix.service;

import com.rev.watchFlix.entity.Admin;
import com.rev.watchFlix.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AdminService {
    public Admin getAdminById(int id);
    // public Admin addAdmin(Admin user);
    public void updateAdmin(int id, Admin user);
    public void deleteAdmin(int id);
    List<User> getUsers();
    List<Admin> getAdmins();
    void updateUser(int id, User user);
}