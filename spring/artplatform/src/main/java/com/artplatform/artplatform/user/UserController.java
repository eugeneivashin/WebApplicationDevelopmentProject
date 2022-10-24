package com.artplatform.artplatform.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService UserService) {
        this.userService = UserService;
    }

    @GetMapping(path="/user")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping(path="users/asd/{id}")
    public ResponseEntity<User> getById(@PathVariable Integer id) {
        Optional<User> user = userService.getUser(id);
        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(user.get(), HttpStatus.BAD_REQUEST);
        }
    }


    @PostMapping(path="/user")
    public void registerUser(@RequestBody User user){
        userService.addNewUser(user);
    }

    /*
    @PostMapping
    public void registerUser(@RequestBody User user){
        userService.addNewUser(user);
    }
    */


}
