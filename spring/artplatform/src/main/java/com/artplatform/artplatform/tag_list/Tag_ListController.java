package com.artplatform.artplatform.tag_list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/tag_list")
public class Tag_ListController {

    private final Tag_ListService tagListService;

    @Autowired
    public Tag_ListController(Tag_ListService tagListService) {
        this.tagListService = tagListService;
    }

    @GetMapping
    public List<Tag_List> getTagLists(){
        return tagListService.getTagLists();
    }
}
