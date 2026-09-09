package com.gian.showcase.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gian.showcase.dto.educationdto.EducationRequest;
import com.gian.showcase.dto.educationdto.EducationResponse;
import com.gian.showcase.model.entity.Education;
import com.gian.showcase.repository.EducationRepository;
import com.gian.showcase.service.EducationService;

/*course_edu
school_edu
proudof_edu
start_edu
end_edu
 */

@Service 
public class EducationServiceImpl implements EducationService{
    @Autowired 
    private EducationRepository educationRepository;

    @Override
    public EducationResponse createEducation(EducationRequest request){
        Education education = new Education();
        education.setCourseEdu(request.getCourseEdu());
        education.setSchoolEdu(request.getSchoolEdu());
        education.setProudofEdu(request.getProudofEdu());
        education.setStartEdu(request.getStartEdu());
        education.setEndEdu(request.getEndEdu());

        Education saved =  educationRepository.save(education);

        EducationResponse response = new EducationResponse();
        response.setSchoolEdu(saved.getSchoolEdu());

        return response;

    }


    @Override 
    public List<Education> getAllEducations(){
        return educationRepository.findAll();
    }

    @Override 
    public Education updateEducation(Long id, EducationRequest request){
        Education education = educationRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Experience not found"));

        education.setCourseEdu(request.getCourseEdu());
        education.setSchoolEdu(request.getSchoolEdu());
        education.setProudofEdu(request.getProudofEdu());
        education.setStartEdu(request.getStartEdu());
        education.setEndEdu(request.getEndEdu());

        return educationRepository.save(education);

    }

    @Override 
    public void deleteEducation(Long id){
        educationRepository.deleteById(id);
    }


}
