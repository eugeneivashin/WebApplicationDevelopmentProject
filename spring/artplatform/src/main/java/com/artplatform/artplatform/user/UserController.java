package com.artplatform.artplatform.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService UserService) {
        this.userService = UserService;
    }


    @GetMapping
    public List<User> getStudents() {
        return userService.getUsers();
    }

    /*
    @PostMapping
    public void registerUser(@RequestBody User user){
        userService.addNewUser(user);
    }
    */

    @PostMapping
    public void registerUser(@RequestBody User user){
        userService.addNewUser(user);
    }

}
