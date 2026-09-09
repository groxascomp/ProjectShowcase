package com.gian.showcase.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gian.showcase.dto.experiencedto.ExperienceRequest;
import com.gian.showcase.dto.experiencedto.ExperienceResponse;
import com.gian.showcase.model.entity.Experience;

import com.gian.showcase.repository.ExperienceRepository;
import com.gian.showcase.service.ExperienceService;

@Service 
public class ExperienceServiceImpl implements ExperienceService{

    @Autowired 
    private ExperienceRepository experienceRepository;

    

    @Override 
    public ExperienceResponse createExperience(ExperienceRequest request){
        Experience experience = new Experience();
        experience.setRoleExp(request.getRoleExp());
        experience.setCompanyExp(request.getCompanyExp());
        experience.setResponsibilityExp(request.getResponsibilityExp());
        experience.setStackExp(request.getStackExp());
        experience.setStartExp(request.getStartExp());
        experience.setEndExp(request.getEndExp());
        experience.setTypeExp(request.getTypeExp());

        Experience saved = experienceRepository.save(experience);

        ExperienceResponse response = new ExperienceResponse();
        response.setRoleExp(saved.getRoleExp());
        response.setCompanyExp(saved.getCompanyExp());

        return response;
    }


    @Override 
    public List<Experience> getAllExperiences(){
        return experienceRepository.findAll();
    }
    
    @Override 
    public Experience updateExperience(Long id, ExperienceRequest request){
        Experience experience = experienceRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Experience not found"));

        experience.setRoleExp(request.getRoleExp());
        experience.setCompanyExp(request.getCompanyExp());
        experience.setResponsibilityExp(request.getResponsibilityExp());
        experience.setStackExp(request.getStackExp());
        experience.setStartExp(request.getStartExp());
        experience.setEndExp(request.getEndExp());
        experience.setTypeExp(request.getTypeExp());

        return experienceRepository.save(experience);
    }

    @Override 
    public void deleteExperience(Long id){
        experienceRepository.deleteById(id);
    }   

}
