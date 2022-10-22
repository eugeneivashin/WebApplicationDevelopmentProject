package com.artplatform.artplatform.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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


    @RequestMapping(value = "/users?email=<<email>>", method = RequestMethod.GET)
    public Optional<User> getByEmail(@RequestParam("email") String email) {
        return this.userService.getByEmail(email);
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
