package com.gian.showcase.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gian.showcase.model.entity.Link;

public interface LinkRepository extends JpaRepository<Link, Long>{
    
}
