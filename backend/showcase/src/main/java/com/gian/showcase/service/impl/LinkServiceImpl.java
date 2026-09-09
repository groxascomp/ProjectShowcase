package com.gian.showcase.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gian.showcase.dto.linkdto.LinkRequest;
import com.gian.showcase.dto.linkdto.LinkResponse;
import com.gian.showcase.model.entity.Link;
import com.gian.showcase.repository.LinkRepository;
import com.gian.showcase.service.LinkService;

@Service 
public class LinkServiceImpl implements LinkService{

    @Autowired 
    private LinkRepository linkRepository;

    @Override 
    public LinkResponse createLink (LinkRequest request){
        Link existingLink = linkRepository.findById(1L).orElse(null);

        if (existingLink != null) {
            existingLink.setGithubLinks(request.getGithubLinks());
            existingLink.setLinkedinLinks(request.getLinkedinLinks());
            existingLink.setFacebookLinks(request.getFacebookLinks());
            existingLink.setInstagramLinks(request.getInstagramLinks());
            existingLink.setCvLinks(request.getCvLinks());

            Link saved = linkRepository.save(existingLink);

            LinkResponse response = new LinkResponse();
            response.setGithubLinks(saved.getGithubLinks());
            response.setLinkedinLinks(saved.getLinkedinLinks());
            response.setFacebookLinks(saved.getFacebookLinks());
            response.setInstagramLinks(saved.getInstagramLinks());
            response.setCvLinks(saved.getCvLinks());

            return response;
        }

        Link link = new Link();
        link.setIdLinks(1L);
        link.setGithubLinks(request.getGithubLinks());
        link.setLinkedinLinks(request.getLinkedinLinks());
        link.setFacebookLinks(request.getFacebookLinks());
        link.setInstagramLinks(request.getInstagramLinks());
        link.setCvLinks(request.getCvLinks());

        Link saved = linkRepository.save(link);

        LinkResponse response = new LinkResponse();
        response.setGithubLinks(saved.getGithubLinks());
        response.setLinkedinLinks(saved.getLinkedinLinks());
        response.setFacebookLinks(saved.getFacebookLinks());
        response.setInstagramLinks(saved.getInstagramLinks());
        response.setCvLinks(saved.getCvLinks());

        return response;

    }

    @Override 
    public Link updateLink(Long id, LinkRequest request){
        if (!id.equals(1L)) {
            throw new IllegalArgumentException("Only ID 1 is allowed for links.");
        }

        Link link = linkRepository.findById(id)
        .orElseGet(() -> {
            Link newLink = new Link();
            newLink.setIdLinks(id);
            return newLink;
        });

        link.setGithubLinks(request.getGithubLinks());
        link.setLinkedinLinks(request.getLinkedinLinks());
        link.setFacebookLinks(request.getFacebookLinks());
        link.setInstagramLinks(request.getInstagramLinks());
        link.setCvLinks(request.getCvLinks());

        return linkRepository.save(link);

    }


 
}
