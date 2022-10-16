package com.artplatform.artplatform.auth;

import com.artplatform.artplatform.user.User;
import com.artplatform.artplatform.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Controller
public class AuthController {


    @GetMapping("/auth")
    public String auth( Model model) {
        model.addAttribute("title", "Art Platform - Home");
        model.addAttribute("user", new User());
        return "auth";
    }

    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/loginUser")
    public String register(@ModelAttribute User user, BindingResult result, Model model){
        model.addAttribute("user", user);
        Optional<User> userOptional = userService.loginUser(user.getEmail(),
                user.getPassword());
        if (userOptional.isPresent())
        {
            User currentUser = userOptional.get();
            model.addAttribute("currentUser", currentUser);
            model.addAttribute("username",currentUser.getUsername());
            return "redirect:/profile";
        }
        else{
            return "auth";
        }
    }

    @PostMapping("/registerUser")
    public String registerUser(@ModelAttribute User user, BindingResult result, Model model){
        model.addAttribute("user", user);
        try{
            userService.addNewUser(user);
            return "redirect:/profile";
        }
        catch (IllegalStateException e){
            return "auth";
        }
    }

}
