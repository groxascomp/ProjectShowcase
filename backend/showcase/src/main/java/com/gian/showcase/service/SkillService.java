package com.gian.showcase.service;

import java.util.List;

import com.gian.showcase.dto.skilldto.SkillRequest;
import com.gian.showcase.dto.skilldto.SkillResponse;
import com.gian.showcase.model.entity.Skill;

public interface SkillService {
    SkillResponse createSkill(SkillRequest request);
    List<Skill> getAllSkills();
    Skill updateSkill(Long id, SkillRequest request);
}
