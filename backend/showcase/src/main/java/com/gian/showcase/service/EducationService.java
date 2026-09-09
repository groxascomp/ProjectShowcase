package com.gian.showcase.service;

import java.util.List;

import com.gian.showcase.dto.educationdto.EducationRequest;
import com.gian.showcase.dto.educationdto.EducationResponse;
import com.gian.showcase.model.entity.Education;



public interface EducationService {
    EducationResponse createEducation(EducationRequest request);
    List<Education> getAllEducations();
    Education updateEducation(Long id, EducationRequest request);
    void deleteEducation(Long id);
}
