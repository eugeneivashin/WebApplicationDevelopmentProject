package com.artplatform.artplatform.controllers;

import com.artplatform.artplatform.user.User;
import com.artplatform.artplatform.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
public class MainController {

    private final UserService userService;

    @Autowired
    public MainController(UserService UserService) {
        this.userService = UserService;
    }

    @GetMapping(path="/users/login")
    @CrossOrigin("http://localhost:4200")
    public Optional<User> loginSection(String email, String password) {
        return userService.getIdByEmail(email, password);
    }

}
