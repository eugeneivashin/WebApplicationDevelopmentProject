package com.artplatform.artplatform.tag;

import com.artplatform.artplatform.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@Repository
public interface TagRepository extends JpaRepository<Tag, Integer> {
}
