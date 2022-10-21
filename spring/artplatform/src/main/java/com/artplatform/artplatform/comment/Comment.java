package com.artplatform.artplatform.comment;

import com.artplatform.artplatform.post.Post;
import com.artplatform.artplatform.user.User;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name="comment")
@Getter
@Setter
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String comment_text;

    private Integer comment_upvote;

    private Integer comment_downvote;

    private Integer comment_reply_to;

    @CreationTimestamp
    private LocalDateTime comment_date;


    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name="post_id", nullable = false)
    private Post post;

}

