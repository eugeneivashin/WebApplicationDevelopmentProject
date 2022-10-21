package com.artplatform.artplatform.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getPosts(){
        System.out.println("im here");
        System.out.println(postRepository.findAll());
        return postRepository.findAll();
    }
}
