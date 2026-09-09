package com.gian.showcase.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table (name="links")
public class Link {


    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name="id_links")
    private Long idLinks;

    @Column (name="github_links")
    private String githubLinks;

    @Column (name="linkedin_links")
    private String linkedinLinks;

    @Column (name="facebook_links")
    private String facebookLinks;

    @Column (name="instagram_links")
    private String instagramLinks;

    @Column (name="cv_links")
    private String cvLinks;

    public Long getIdLinks() {
        return idLinks;
    }

    public void setIdLinks(Long idLinks) {
        this.idLinks = idLinks;
    }

    public String getGithubLinks() {
        return githubLinks;
    }

    public void setGithubLinks(String githubLinks) {
        this.githubLinks = githubLinks;
    }

    public String getLinkedinLinks() {
        return linkedinLinks;
    }

    public void setLinkedinLinks(String linkedinLinks) {
        this.linkedinLinks = linkedinLinks;
    }

    public String getFacebookLinks() {
        return facebookLinks;
    }

    public void setFacebookLinks(String facebookLinks) {
        this.facebookLinks = facebookLinks;
    }

    public String getInstagramLinks() {
        return instagramLinks;
    }

    public void setInstagramLinks(String instagramLinks) {
        this.instagramLinks = instagramLinks;
    }

    public String getCvLinks() {
        return cvLinks;
    }

    public void setCvLinks(String cvLinks) {
        this.cvLinks = cvLinks;
    }
}
