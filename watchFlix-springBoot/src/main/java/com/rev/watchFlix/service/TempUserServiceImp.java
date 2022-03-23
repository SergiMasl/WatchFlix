package com.rev.watchFlix.service;

import com.rev.watchFlix.entity.TemporaryUser;
import com.rev.watchFlix.repository.TempUserRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TempUserServiceImp implements TempUserService{

    @Autowired
    private TempUserRep repository;

    @Override
    public TemporaryUser getEmployeeById(int id) {
        return repository.findById(id).get();
    }

    @Override
    public TemporaryUser addEmployee(TemporaryUser tempUser) {
        return repository.save(tempUser);
    }

    @Override
    public void updateEmployee(int id, TemporaryUser user) {
        TemporaryUser tempUser =  repository.findById(id).get();
        tempUser.setEmail(user.getEmail());
        tempUser.setSecurityNumber(user.getSecurityNumber());
        tempUser.setIsExist(user.getIsExist());
        repository.save(tempUser);
    }


    @Override
    public void deleteEmployee(int id) {
        repository.deleteById(id);
    }
}
