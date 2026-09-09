package com.gian.showcase.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gian.showcase.dto.skilldto.SkillRequest;
import com.gian.showcase.dto.skilldto.SkillResponse;
import com.gian.showcase.model.entity.Skill;
import com.gian.showcase.service.SkillService;

@RestController 
@RequestMapping ("/skills")
public class SkillController {
    @Autowired 
    private SkillService service;

    @PostMapping 
    public SkillResponse createSkill(@RequestBody SkillRequest request){
        return service.createSkill(request);
    }

    @PutMapping("/{id}")
    public Skill updateSkill(@PathVariable Long id, @RequestBody SkillRequest request){
        if (!id.equals(1L)) {
            throw new IllegalArgumentException("Only ID 1 is allowed for skill information.");
        }
        return service.updateSkill(id, request);
    }
}
