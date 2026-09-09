package com.gian.showcase.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gian.showcase.model.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    
}
