package com.gian.showcase.service;

import com.gian.showcase.dto.skilldto.SkillRequest;
import com.gian.showcase.dto.skilldto.SkillResponse;
import com.gian.showcase.model.entity.Skill;

public interface SkillService {
    SkillResponse createSkill(SkillRequest request);
    Skill updateSkill(Long id, SkillRequest request);
}
