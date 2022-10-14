package com.artplatform.artplatform.user;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;
import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    private String username;

    @JsonFormat(pattern="yyyy-MM-ddd", shape=JsonFormat.Shape.STRING)
    private String email;

    private LocalDate dob;

    private String password;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public User(String username, String email, LocalDate dob, String password) {
        this.username = username;
        this.email = email;
        this.dob = dob;
        this.password = password;
    }

    public User() {
    }

    public User(Integer id, String username, String email, String password, LocalDate dob) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.dob = dob;
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", dob=" + dob +
                ", password='" + password + '\'' +
                '}';
    }


}
