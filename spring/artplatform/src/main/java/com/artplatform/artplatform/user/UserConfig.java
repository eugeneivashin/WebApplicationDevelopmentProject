package com.artplatform.artplatform.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository) {
        return args -> {
            User user1 = new User( "Mark", "mark@gmail.com",
                    "male",
                    "password_creative");

            User user2 = new User( "2", "2@gmail.com",
                    "female",
                    "very_creative");

            userRepository.saveAll(
                    List.of(user1, user2)
            );
        };
    }
}