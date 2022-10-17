package com.artplatform.artplatform.controllers;

import com.artplatform.artplatform.user.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String greeting( Model model) {
        model.addAttribute("title", "Art Platform - Home");
        return "index";
    }

    @GetMapping("/profile")
    public String profile( Model model) {
        model.addAttribute("title", "Art Platform - Auth");
        return "profile";
    }
    @GetMapping("/post")
    public String post( Model model) {
        model.addAttribute("title", "Art Platform - Post");
        return "post";
    }


}
