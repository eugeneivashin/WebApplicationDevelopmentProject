package com.artplatform.artplatform.user;

import com.artplatform.artplatform.comment.Comment;
import com.artplatform.artplatform.post.Post;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Set;
import javax.persistence.*;

@Entity
@Table(name="user")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;

    private String email;

    private String gender;

    private String password;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private Set<Post> posts;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private Set<Comment> comments;

    /*
    public User(String username, String email, String gender, String password) {
        this.username = username;
        this.email = email;
        this.gender = gender;
        this.password = password;
    }

    public User() {
    }

    public User(Integer id, String username, String email, String password, String gender) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.gender = gender;
        this.password = password;
    }

    public User(String email, String password)
    {
        this.email = email;
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", gender=" + gender +
                ", password='" + password + '\'' +
                '}';
    }

     */


}
