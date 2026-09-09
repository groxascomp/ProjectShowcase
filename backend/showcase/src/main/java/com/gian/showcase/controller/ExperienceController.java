package com.gian.showcase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gian.showcase.dto.experiencedto.ExperienceRequest;
import com.gian.showcase.dto.experiencedto.ExperienceResponse;
import com.gian.showcase.model.entity.Experience;
import com.gian.showcase.service.ExperienceService;

@RestController 
@RequestMapping("/experiences")
public class ExperienceController {

    @Autowired 
    private ExperienceService service;

    @PostMapping 
    public ExperienceResponse createExperience(@RequestBody ExperienceRequest request){
        return service.createExperience(request);
    }
    
    @GetMapping 
    public List<Experience> getAllExperiences(){
        return service.getAllExperiences();
    }

    @PutMapping ("/{id}")
    public Experience updateExperience(@PathVariable Long id, @RequestBody  ExperienceRequest request){
        return service.updateExperience(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteExperience(@PathVariable Long id){
        service.deleteExperience(id);
    }

}
