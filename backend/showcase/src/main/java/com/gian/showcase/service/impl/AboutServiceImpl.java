package com.gian.showcase.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gian.showcase.dto.aboutdto.AboutRequest;
import com.gian.showcase.dto.aboutdto.AboutResponse;
import com.gian.showcase.model.entity.About;
import com.gian.showcase.repository.AboutRepository;
import com.gian.showcase.service.AboutService;

@Service 
public class AboutServiceImpl implements AboutService {
    @Autowired 
    private AboutRepository aboutRepository;

    @Override 
    public AboutResponse createAbout(AboutRequest request){
        About about = aboutRepository.findById(1L).orElseGet(() -> {
            About newAbout = new About();
            newAbout.setIdAbout(1L);
            return newAbout;
        });

        about.setFirstNameAbouts(request.getFirstNameAbouts());
        about.setLastNameAbouts(request.getLastNameAbouts());
        about.setAgeAbouts(request.getAgeAbouts());
        about.setCurrentRoleAbouts(request.getCurrentRoleAbouts());
        about.setCurrentCompanyAbouts(request.getCurrentCompanyAbouts());
        about.setLocationAbouts(request.getLocationAbouts());
        about.setEmailAbouts(request.getEmailAbouts());
        about.setAvailabilityAbouts(request.getAvailabilityAbouts());
        about.setLine1Abouts(request.getLine1Abouts());
        about.setLine2Abouts(request.getLine2Abouts());
        about.setLine3Abouts(request.getLine3Abouts());

        About saved = aboutRepository.save(about);

        AboutResponse response = new AboutResponse();
        response.setIdAbout(saved.getIdAbout());
        response.setFirstNameAbouts(saved.getFirstNameAbouts());
        response.setLastNameAbouts(saved.getLastNameAbouts());
        response.setAgeAbouts(saved.getAgeAbouts());
        response.setCurrentRoleAbouts(saved.getCurrentRoleAbouts());
        response.setCurrentCompanyAbouts(saved.getCurrentCompanyAbouts());
        response.setLocationAbouts(saved.getLocationAbouts());
        response.setEmailAbouts(saved.getEmailAbouts());
        response.setAvailabilityAbouts(saved.getAvailabilityAbouts());
        response.setLine1Abouts(saved.getLine1Abouts());
        response.setLine2Abouts(saved.getLine2Abouts());
        response.setLine3Abouts(saved.getLine3Abouts());

        return response;

    }

    @Override
    public List<About> getAllAbouts(){
        return aboutRepository.findAll();
    }


    @Override 
    public About updateAbout(Long id, AboutRequest request){
        if (!id.equals(1L)) {
            throw new IllegalArgumentException("Only ID 1 is allowed for about information.");
        }

        About about = aboutRepository.findById(id).orElseGet(() -> {
            About newAbout = new About();
            newAbout.setIdAbout(id);
            return newAbout;
        });

        about.setFirstNameAbouts(request.getFirstNameAbouts());
        about.setLastNameAbouts(request.getLastNameAbouts());
        about.setAgeAbouts(request.getAgeAbouts());
        about.setCurrentRoleAbouts(request.getCurrentRoleAbouts());
        about.setCurrentCompanyAbouts(request.getCurrentCompanyAbouts());
        about.setLocationAbouts(request.getLocationAbouts());
        about.setEmailAbouts(request.getEmailAbouts());
        about.setAvailabilityAbouts(request.getAvailabilityAbouts());
        about.setLine1Abouts(request.getLine1Abouts());
        about.setLine2Abouts(request.getLine2Abouts());
        about.setLine3Abouts(request.getLine3Abouts());

        return aboutRepository.save(about);

    }


}
