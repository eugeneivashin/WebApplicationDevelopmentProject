package com.artplatform.artplatform.tag_list;

import com.artplatform.artplatform.post.Post;
import com.artplatform.artplatform.tag.Tag;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="tag_list")
@Getter
@Setter
public class Tag_List {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="post_id", nullable = false)
    private Post post;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="tag_id", nullable = false)
    private Tag tag;

}
