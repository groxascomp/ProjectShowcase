package com.gian.showcase.service;

import java.util.List;

import com.gian.showcase.dto.projectdto.ProjectRequest;
import com.gian.showcase.dto.projectdto.ProjectResponse;
import com.gian.showcase.model.entity.Project;

public interface ProjectService {
    ProjectResponse createProject(ProjectRequest request);
    List<Project> getAllProjects();
    Project updateProject(Long id, ProjectRequest request);
    void deleteProject(Long id);
}
