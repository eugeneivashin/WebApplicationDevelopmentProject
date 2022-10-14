package com.artplatform.artplatform.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String greeting( Model model) {
        model.addAttribute("title", "Art Platform");
        return "index";
    }

    @GetMapping("/login")
    public String login( Model model) {
        model.addAttribute("title", "Art Platform");
        return "login_page";
    }

    @GetMapping("/registration")
    public String registration( Model model) {
        model.addAttribute("title", "Art Platform");
        return "registration_page";
    }

}
