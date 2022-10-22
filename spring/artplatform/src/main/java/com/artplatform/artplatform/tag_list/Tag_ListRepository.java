package com.artplatform.artplatform.tag_list;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@Repository
public interface Tag_ListRepository extends JpaRepository<Tag_List, Integer> {
}