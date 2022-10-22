package com.artplatform.artplatform.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@CrossOrigin("http://localhost:4200")
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT u FROM User u WHERE u.email = ?1")
    Optional<User> findUserByEmail(String email);

    @Query("SELECT u from User u Where u.email = ?1 and u.password= ?2")
    Optional<User> userLogin(String email, String password);

    @Query("SELECT u from User u Where u.email = ?1 and u.password= ?2")
    Optional<User> find(String email, String password);

}
