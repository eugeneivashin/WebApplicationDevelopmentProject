package com.artplatform.artplatform.post;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {

    @Query("SELECT p FROM Post p where user_id=?1")
    Page<Post> findUserPosts(@Param("id") Integer id,  Pageable pageable);

    @Query("SELECT p FROM Post p where user_id=?1")
    Page<Post> findTagPosts(@Param("id") Integer id, Pageable pageable);

    @Query("SELECT c FROM Comment c where post_id=?1")
    Page<Post> findPostComments(@Param("id") Integer id, Pageable pageable);

    Page<Post> findByTitleContaining (@Param("title") String title, Pageable pageable);

    @Query("select p from Tag_List tl inner join tl.post p" +
            " inner join tl.tag t on t.title=?1")
    Page<Post> findTagListPost(@Param("title") String title, Pageable pageable);

    /*
    @Query("select p from Tag_List tl inner join tl.post p" +
            " inner join tl.tag t where t.title in (:titles)" +
            " group by p" +
            " having count(distinct t.title) = ?2")
    Page<Post> findByTagListPostTitle(@Param("titles") List<String> titles, @Param("tags") Integer tags, Pageable pageable);


     */

}
