package com.artplatform.artplatform.tag;

import com.artplatform.artplatform.tag_list.Tag_List;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="tag")
@Getter
@Setter
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "tag")
    private Set<Tag_List> tagLists;

}