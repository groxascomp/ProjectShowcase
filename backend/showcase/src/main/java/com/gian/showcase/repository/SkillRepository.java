package com.gian.showcase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gian.showcase.model.entity.Skill;

public interface SkillRepository extends JpaRepository<Skill, Long>{
    
}
