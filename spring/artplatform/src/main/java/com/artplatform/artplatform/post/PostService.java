package com.artplatform.artplatform.post;

import com.artplatform.artplatform.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {


    private final PostRepository postRepository;
    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getPosts(){
        return postRepository.findAll();
    }

    public Optional<Post> getPost(Integer id) {
        return postRepository.getPostById(id);
    }

    public ResponseEntity<Post[]> getPosts2(){
        return new ResponseEntity<>(postRepository.findAllPosts2(), HttpStatus.OK);
    }

    public ResponseEntity<Post[]> findTagListPost2(String title){
        return new ResponseEntity<>(postRepository.findTagListPost2(title), HttpStatus.OK);
    }
}
