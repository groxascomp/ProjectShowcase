package com.gian.showcase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gian.showcase.dto.aboutdto.AboutRequest;
import com.gian.showcase.dto.aboutdto.AboutResponse;
import com.gian.showcase.model.entity.About;
import com.gian.showcase.service.AboutService;

@RestController 
@RequestMapping("/abouts")
public class AboutController {

    @Autowired 
    private AboutService service;

    @PostMapping 
    public AboutResponse createAbout(@RequestBody AboutRequest request){
        return service.createAbout(request);

    }

    @GetMapping
    public List<About> getAllAbouts(){
        return service.getAllAbouts();
    }

    @PutMapping("/{id}")
    public About updateAbout(@PathVariable Long id, @RequestBody AboutRequest request){
        if (!id.equals(1L)) {
            throw new IllegalArgumentException("Only ID 1 is allowed for about information.");
        }
        return service.updateAbout(id, request);
    }
    
}
