package com.gian.showcase.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gian.showcase.model.entity.Education;

public interface EducationRepository extends JpaRepository <Education, Long>{
    
}
