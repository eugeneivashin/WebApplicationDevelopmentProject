package com.artplatform.artplatform.comment;

import com.artplatform.artplatform.post.Post;
import com.artplatform.artplatform.post.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/comment")
public class CommentController {


    private final CommentService commentService;
    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public List<Comment> getComments(){
        return commentService.getComments();
    }

    @PostMapping
    public void sendComment(@RequestBody Comment comment){
        commentService.addNewComment(comment);
    }
}
