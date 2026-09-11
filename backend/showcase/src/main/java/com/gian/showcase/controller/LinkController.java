package com.gian.showcase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gian.showcase.dto.linkdto.LinkRequest;
import com.gian.showcase.dto.linkdto.LinkResponse;
import com.gian.showcase.model.entity.Link;
import com.gian.showcase.service.LinkService;

@RestController 
@RequestMapping ("/links")
public class LinkController {

    @Autowired 
    private LinkService service;

    @PostMapping 
    public LinkResponse createLink (@RequestBody LinkRequest request){
        
        return service.createLink(request);
    }

    @GetMapping
    public List<Link> getAllLinks(){
        return service.getAllLinks();
    }

    @PutMapping("/{id}")
    public Link updateLink(@PathVariable Long id, @RequestBody LinkRequest request){
        if (!id.equals(1L)) {
            throw new IllegalArgumentException("Only ID 1 is allowed for links.");
        }
        return service.updateLink(id, request);
    }

    
}
