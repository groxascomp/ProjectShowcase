package com.gian.showcase.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gian.showcase.dto.skilldto.SkillRequest;
import com.gian.showcase.dto.skilldto.SkillResponse;
import com.gian.showcase.repository.SkillRepository;
import com.gian.showcase.service.SkillService;
import com.gian.showcase.model.entity.Skill;

@Service 
public class SkillServiceImpl implements SkillService{
    @Autowired 
    private SkillRepository skillRepository;

    @Override 
    public SkillResponse createSkill(SkillRequest request){
        Skill skill = skillRepository.findById(1L).orElseGet(() -> {
            Skill newSkill = new Skill();
            newSkill.setIdSkills(1L);
            return newSkill;
        });

        skill.setLanguagesSkills(request.getLanguageSkills());
        skill.setFrontendSkills(request.getFrontendSkills());
        skill.setBackendSkills(request.getBackendSkills());
        skill.setToolsSkills(request.getToolsSkills());

        Skill saved = skillRepository.save(skill);

        SkillResponse response = new SkillResponse();
        response.setLanguageSkills(saved.getLanguagesSkills());
        response.setFrontendSkills(saved.getFrontendSkills());
        response.setBackendSkills(saved.getBackendSkills());
        response.setToolsSkills(saved.getToolsSkills());

        return response;

    }

    @Override
    public Skill updateSkill(Long id, SkillRequest request){
        if (!id.equals(1L)) {
            throw new IllegalArgumentException("Only ID 1 is allowed for skill information.");
        }

        Skill skill = skillRepository.findById(id).orElseGet(() -> {
            Skill newSkill = new Skill();
            newSkill.setIdSkills(id);
            return newSkill;
        });

        skill.setLanguagesSkills(request.getLanguageSkills());
        skill.setFrontendSkills(request.getFrontendSkills());
        skill.setBackendSkills(request.getBackendSkills());
        skill.setToolsSkills(request.getToolsSkills());

        return skillRepository.save(skill);
    }
}
