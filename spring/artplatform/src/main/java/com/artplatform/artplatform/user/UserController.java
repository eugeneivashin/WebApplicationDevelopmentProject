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
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @RequestMapping(value = "/login2", method = RequestMethod.GET)
    public Integer login2() {
        return 2;
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
