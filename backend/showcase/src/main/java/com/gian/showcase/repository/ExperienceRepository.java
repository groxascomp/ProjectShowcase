package com.gian.showcase.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gian.showcase.model.entity.Experience;

public interface ExperienceRepository extends JpaRepository<Experience, Long>{
    
}
