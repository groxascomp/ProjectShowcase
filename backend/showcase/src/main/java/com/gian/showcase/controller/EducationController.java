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

import com.gian.showcase.dto.educationdto.EducationRequest;
import com.gian.showcase.dto.educationdto.EducationResponse;
import com.gian.showcase.model.entity.Education;
import com.gian.showcase.service.EducationService;

@RestController  
@RequestMapping("/educations")
public class EducationController {

    @Autowired
    private EducationService service;

    @PostMapping 
    public EducationResponse createEducation(@RequestBody EducationRequest request){
        return service.createEducation(request);
    }
    
    @GetMapping 
    public List<Education> getAllEducations(){
        return service.getAllEducations();
    }

    @PutMapping ("/{id}")
    public Education updateEducation(@PathVariable Long id, @RequestBody EducationRequest request){
        return service.updateEducation(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteEducation(@PathVariable Long id){
        service.deleteEducation(id);
    }
    
}
