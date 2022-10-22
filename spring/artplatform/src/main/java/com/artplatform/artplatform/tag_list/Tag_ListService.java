package com.artplatform.artplatform.tag_list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Tag_ListService {
    private final Tag_ListRepository tagListRepository;

    @Autowired
    public Tag_ListService(Tag_ListRepository tagListRepository) {
        this.tagListRepository = tagListRepository;
    }

    public List<Tag_List> getTagLists() {
        return tagListRepository.findAll();
    }
}
