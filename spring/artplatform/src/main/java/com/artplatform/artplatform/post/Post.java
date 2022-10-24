package com.artplatform.artplatform.post;

import com.artplatform.artplatform.comment.Comment;
import com.artplatform.artplatform.tag_list.Tag_List;
import com.artplatform.artplatform.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "post")
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="post_title", nullable=false)
    private String title;

    private String post_description;

    private String post_image;

    private Integer post_upvote;

    private Integer post_downvote;

    @CreationTimestamp
    private LocalDateTime post_date;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "post")
    private Set<Comment> comments;

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "post")
    private Set<Tag_List> tag_lists;

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

