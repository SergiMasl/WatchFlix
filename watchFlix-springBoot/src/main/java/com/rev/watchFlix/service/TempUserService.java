package com.rev.watchFlix.service;

import com.rev.watchFlix.entity.TemporaryUser;
import org.springframework.stereotype.Service;

@Service
public interface TempUserService {
    public TemporaryUser addEmployee(TemporaryUser employee);
    public void updateEmployee(int id, TemporaryUser employee);
}
