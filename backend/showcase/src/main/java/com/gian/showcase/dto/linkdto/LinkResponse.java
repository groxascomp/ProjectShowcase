package com.gian.showcase.dto.linkdto;

public class LinkResponse {
    private String githubLinks;
    private String linkedinLinks;
    private String facebookLinks;
    private String instagramLinks;
    private String cvLinks;

    public LinkResponse(){}

    public LinkResponse(String githubLinks, String linkedinLinks, String facebookLinks, String instagramLinks, String cvLinks){
        this.githubLinks = githubLinks;
        this.linkedinLinks = linkedinLinks;
        this.facebookLinks = facebookLinks;
        this.instagramLinks = instagramLinks;
        this.cvLinks = cvLinks;
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


