package com.artplatform.artplatform.post;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {

    @Query("SELECT p FROM Post p where user_id=?1")
    Page<Post> findUserPosts(@Param("id") Integer id,  Pageable pageable);

    @Query("SELECT p FROM Post p where user_id=?1")
    Page<Post> findTagPosts(@Param("id") Integer id, Pageable pageable);

    @Query("SELECT c FROM Comment c where post_id=?1")
    Page<Post> findPostComments(@Param("id") Integer id, Pageable pageable);

}
