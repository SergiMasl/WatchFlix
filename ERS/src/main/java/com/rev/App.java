package com.rev;

import jakarta.servlet.http.HttpServlet;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.io.PrintWriter;
import java.util.List;

public class App extends HttpServlet {
    private int id;
    private String amount;
    private String pin;
    private String date;
    private String note;
    private String username;
    private String password;

//    public App(String amount, String pin, String date, String note) {
//        this.amount = amount;
//        this.date = date;
//        this.pin = pin;
//        this.note = note;
//    }
//
//    void add(String
//         System.out.println("project started...");
//         Configuration conf = new Configuration();
//         conf.configure("hibernate.cfg.xml");
//         SessionFactory factory = conf.buildSessionFactory();
//         Session session = factory.openSession();
//         Transaction trans = session.beginTransaction();
//
//
//
////           // emp.setId(2);
////            emp.
////            emp.setDate(date);
////            emp.setNote(note);
//
//            session.save(emp);
//            trans.commit();
//        }
//
//        session.close();
//
//    }
}
