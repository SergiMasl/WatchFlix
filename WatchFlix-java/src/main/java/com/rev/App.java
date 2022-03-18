package com.rev;

import com.rev.dao.UserDao;
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
        User user = new User(1, "user1", "1111", "Test Name1", "t@gmail.com", "111111111 Test", true, true );
        int row = userDao.insert(user);
        System.out.println("("+row+") row affected");

    }
}
