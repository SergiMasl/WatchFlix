package com.rev;

import com.rev.dao.AdminDao;
import com.rev.dao.UserDao;
import com.rev.entity.Admin;
import com.rev.entity.User;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args ) {

        ApplicationContext context = new ClassPathXmlApplicationContext("config.xml");
        UserDao userDao = (UserDao) context.getBean("userDao");
        User user = new User(4, "user4", "44", "Test Name4", "Number4@gmail.com", "4444444 Test", true, true );
        int row = userDao.insert(user);
        System.out.println("("+row+") row affected");


        AdminDao adminDao = (AdminDao) context.getBean("adminDao");
        Admin admin = new Admin(1, "Admin1", "111", "Test AdminName1", "ADMINNumber1@gmail.com");
        int adminRow = adminDao.adminInsert(admin);
        System.out.println("("+adminRow+") row affected");


    }
}