package com.artplatform.artplatform.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }



    public List<User> getUsers() {
        return userRepository.findAll();
    }


    public Optional<User> getUser(Integer id) {
        return userRepository.findUserById(id);
    }


    public void addNewUser(User user) {
        Optional<User> userOptional = userRepository.findUserByEmail(user.getEmail());
        if (userOptional.isPresent())
        {
            throw new IllegalStateException("email taken");
        }
        userRepository.save(user);
    }

    /*
    public Optional<User> loginUser(Integer id, String password){
        return userRepository.userLogin(email, password);
    }

     */



    public Optional<User> getIdByEmail(String email, String password){
        Optional<Integer> userId = userRepository.findUserIdByEmail(email);
        if (userId.isPresent()){
            Integer id = userId.get();
            Optional<User> user = userRepository.findUserById(id);
            if (Objects.equals(user.get().getPassword(), password)){
                return user;
            }
        }
        return Optional.empty();
    }
}