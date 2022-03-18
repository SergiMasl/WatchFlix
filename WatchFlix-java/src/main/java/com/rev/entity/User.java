package com.rev.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users_table")
public class User {

    @Id
    @Column(name="id_user")
    private int id;
    @Column(name="u_username")
    private String u_username;
    @Column(name="u_password")
    private String u_password;
    @Column(name="u_name")
    private String u_name;
    @Column(name="u_email")
    private String u_email;
    @Column(name="u_payCard")
    private String u_payCard;
    @Column(name="u_isPaied")
    private boolean u_isPaied;
    @Column(name="u_isActive")
    private boolean u_isActive;

    public User(int id, String u_username, String u_password, String u_name, String u_email, String u_payCard, boolean u_isPaied, boolean u_isActive) {
        this.id = id;
        this.u_username = u_username;
        this.u_password = u_password;
        this.u_name = u_name;
        this.u_email = u_email;
        this.u_payCard = u_payCard;
        this.u_isPaied = u_isPaied;
        this.u_isActive = u_isActive;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getU_username() {
        return u_username;
    }

    public void setU_username(String u_username) {
        this.u_username = u_username;
    }

    public String getU_password() {
        return u_password;
    }

    public void setU_password(String u_password) {
        this.u_password = u_password;
    }

    public String getU_name() {
        return u_name;
    }

    public void setU_name(String u_name) {
        this.u_name = u_name;
    }

    public String getU_email() {
        return u_email;
    }

    public void setU_email(String u_email) {
        this.u_email = u_email;
    }

    public String getU_payCard() {
        return u_payCard;
    }

    public void setU_payCard(String u_payCard) {
        this.u_payCard = u_payCard;
    }

    public boolean isU_isPaied() {
        return u_isPaied;
    }

    public void setU_isPaied(boolean u_isPaied) {
        this.u_isPaied = u_isPaied;
    }

    public boolean isU_isActive() {
        return u_isActive;
    }

    public void setU_isActive(boolean u_isActive) {
        this.u_isActive = u_isActive;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", u_username='" + u_username + '\'' +
                ", u_password='" + u_password + '\'' +
                ", u_name='" + u_name + '\'' +
                ", u_email='" + u_email + '\'' +
                ", u_payCard='" + u_payCard + '\'' +
                ", u_isPaied=" + u_isPaied +
                ", u_isActive=" + u_isActive +
                '}';
    }
}
