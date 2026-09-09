package com.gian.showcase.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gian.showcase.model.entity.About;

public interface AboutRepository extends JpaRepository <About, Long>{
    
}
