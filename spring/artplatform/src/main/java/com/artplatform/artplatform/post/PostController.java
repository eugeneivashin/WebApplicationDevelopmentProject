package com.artplatform.artplatform.post;

import com.artplatform.artplatform.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
public class PostController {

    private final PostService postService;
    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping(path="/post")
    public List<Post> getPosts(){
        return postService.getPosts();
    }


    @GetMapping(path="posts/getall")
    public ResponseEntity<Post[]> getAllPostsNew(){
        return postService.getPosts2();
    }

    @GetMapping(path="posts/tag/{title}")
    public ResponseEntity<Post[]> getPostByTag(@PathVariable String title){
        return postService.findTagListPost2(title);
    }

    @GetMapping(path="posts/getdata/{id}")
    public ResponseEntity<Post> getById(@PathVariable Integer id) {
        Optional<Post> post = postService.getPost(id);
        if (post.isPresent()) {
            return new ResponseEntity<>(post.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(post.get(), HttpStatus.BAD_REQUEST);
        }
    }
}
