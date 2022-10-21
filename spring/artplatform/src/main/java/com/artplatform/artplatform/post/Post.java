package com.artplatform.artplatform.post;

import com.artplatform.artplatform.comment.Comment;
import com.artplatform.artplatform.user.User;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "post")
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String post_title;

    private String post_description;

    private String post_image;

    private Integer post_upvote;

    private Integer post_downvote;

    @CreationTimestamp
    private LocalDateTime post_date;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "post")
    private Set<Comment> comments;

/*
    public Post(Integer id, String post_title, String post_description, String post_image,
                Integer post_upvote, Integer post_downvote, LocalDateTime post_date) {
        this.id = id;
        this.post_title = post_title;
        this.post_description = post_description;
        this.post_image = post_image;
        this.post_upvote = post_upvote;
        this.post_downvote = post_downvote;
        this.post_date = post_date;
    }

    public Post() {
    }

    public Post(String post_title, String post_description, String post_image,
                Integer post_upvote, Integer post_downvote, LocalDateTime post_date, User userID) {
        this.post_title = post_title;
        this.post_description = post_description;
        this.post_image = post_image;
        this.post_upvote = post_upvote;
        this.post_downvote = post_downvote;
        this.post_date = post_date;
        this.userID = userID;
    }

 */
}
