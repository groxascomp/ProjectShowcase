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


import com.gian.showcase.dto.projectdto.ProjectRequest;
import com.gian.showcase.dto.projectdto.ProjectResponse;
import com.gian.showcase.model.entity.Project;
import com.gian.showcase.service.ProjectService;

@RestController 
@RequestMapping("/projects")
public class ProjectController {

    @Autowired 
    private ProjectService service;

    @PostMapping 
    public ProjectResponse createProject(@RequestBody ProjectRequest request){
        return service.createProject(request);
    }

    @GetMapping 
    public List<Project> getAllProjects(){
        return service.getAllProjects();
    }

    @PutMapping ("/{id}")
    public Project updateProject(@PathVariable Long id, @RequestBody ProjectRequest request){
        return service.updateProject(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id){
        service.deleteProject(id);
    }
}

