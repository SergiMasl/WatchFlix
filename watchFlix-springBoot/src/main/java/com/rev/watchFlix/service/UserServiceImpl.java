package com.rev.watchFlix.service;

import com.rev.watchFlix.entity.User;
import com.rev.watchFlix.repository.TempUserRep;
import com.rev.watchFlix.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository repository;

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User getUserById(int id) {
        return repository.findById(id).get();
    }

    @Override
    public void updateUser(int id, User employee) {

    }

    @Override
    public void deleteUser(int id) {
        repository.deleteById(id);
    }


    //ADD USer
    @Override
    public User addUser(User user) {


        return repository.save(user);
    }

}
