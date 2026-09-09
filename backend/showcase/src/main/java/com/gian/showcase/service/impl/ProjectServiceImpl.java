package com.gian.showcase.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gian.showcase.dto.projectdto.ProjectRequest;
import com.gian.showcase.dto.projectdto.ProjectResponse;
import com.gian.showcase.model.entity.Project;
import com.gian.showcase.repository.ProjectRepository;
import com.gian.showcase.service.ProjectService;



@Service 
public class ProjectServiceImpl implements ProjectService{

    @Autowired 
    private ProjectRepository projectRepository;

    @Override 
    public ProjectResponse createProject (ProjectRequest request){
        Project project = new Project();
        project.setTechProjects(request.getTechProjects());
        project.setNameProjects(request.getNameProjects());
        project.setDescriptionProjects(request.getDescriptionProjects());
        project.setStackProjects(request.getStackProjects());
        project.setYearProjects(request.getYearProjects());
        project.setGithubProject(request.getGithubProjects());

        Project saved = projectRepository.save(project);

        ProjectResponse response = new ProjectResponse();
        response.setNameProject(saved.getNameProjects());

        return response;
    }

    @Override 
    public List<Project> getAllProjects(){
        return projectRepository.findAll();
    }


    @Override 
    public Project updateProject(Long id, ProjectRequest request){
        Project project = projectRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Project not found"));

        project.setTechProjects(request.getTechProjects());
        project.setNameProjects(request.getNameProjects());
        project.setDescriptionProjects(request.getDescriptionProjects());
        project.setStackProjects(request.getStackProjects());
        project.setYearProjects(request.getYearProjects());
        project.setGithubProject(request.getGithubProjects());

        return projectRepository.save(project);
    }


    @Override 
    public void deleteProject(Long id){
        projectRepository.deleteById(id);
    }   

    
}
