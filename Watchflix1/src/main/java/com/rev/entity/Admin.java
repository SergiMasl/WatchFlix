package com.rev.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin_table")
public class Admin {

        ////////Let me know what else i need to add Ex functions or columns/////
    @Id
    @Column(name="id_admin")
    private int id;
    @Column(name="a_username")
    private String a_username;
    @Column(name="a_password")
    private String a_password;
    @Column(name="a_name")
    private String a_name;
    @Column(name="a_email")
    private String a_email;


    public Admin(int id, String u_username, String u_password, String u_name, String u_email) {
        this.id = id;
        this.a_username = a_username;
        this.a_password = a_password;
        this.a_name = a_name;
        this.a_email = a_email;

    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getA_username() {
        return a_username;
    }

    public void setA_username(String a_username) {
        this.a_username = a_username;
    }

    public String getA_password() {
        return a_password;
    }

    public void setA_password(String a_password) {
        this.a_password = a_password;
    }

    public String getA_name() {
        return a_name;
    }

    public void setA_name(String a_name) {
        this.a_name = a_name;
    }

    public String getA_email() {
        return a_email;
    }

    public void setA_email(String a_email) {
        this.a_email = a_email;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "id=" + id +
                ", a_username='" + a_username + '\'' +
                ", a_password='" + a_password + '\'' +
                ", a_name='" + a_name + '\'' +
                ", a_email='" + a_email + '\'' +
                '}';
    }
}