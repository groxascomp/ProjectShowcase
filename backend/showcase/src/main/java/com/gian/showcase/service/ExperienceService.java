package com.gian.showcase.service;

import java.util.List;

import com.gian.showcase.dto.experiencedto.ExperienceRequest;
import com.gian.showcase.dto.experiencedto.ExperienceResponse;
import com.gian.showcase.model.entity.Experience;


public interface ExperienceService {
    ExperienceResponse createExperience(ExperienceRequest request);
    List<Experience> getAllExperiences();
    Experience updateExperience(Long id, ExperienceRequest request);
    void deleteExperience(Long id);
}
