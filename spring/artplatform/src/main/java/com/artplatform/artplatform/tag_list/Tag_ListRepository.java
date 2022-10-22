package com.artplatform.artplatform.tag_list;

import com.artplatform.artplatform.post.Post;
import com.artplatform.artplatform.tag.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@Repository
public interface Tag_ListRepository extends JpaRepository<Tag_List, Integer> {

    @Query("select p from Tag_List tl inner join tl.post p" +
            " inner join tl.tag t on t.id=?1")
    Page<Post> findTagListPost(@Param("id") Integer id, Pageable pageable);

}