package com.gian.showcase.dto.projectdto;

public class ProjectRequest {
    private String techProjects;
    private String nameProjects;
    private String descriptionProjects;
    private String stackProjects;
    private String yearProjects;
    private String githubProjects;

    public ProjectRequest(){}

    public ProjectRequest(String techProjects, String nameProjects, String descriptionProjects, String stackProjects, String yearProjects, String githubProjects){
        this.techProjects = techProjects;
        this.nameProjects = nameProjects;
        this.descriptionProjects = descriptionProjects;
        this.stackProjects = stackProjects;
        this.yearProjects = yearProjects;
        this.githubProjects = githubProjects;

    }

    public String getTechProjects() {
        return techProjects;
    }

    public void setTechProjects(String techProjects) {
        this.techProjects = techProjects;
    }

    public String getNameProjects() {
        return nameProjects;
    }

    public void setNameProjects(String nameProjects) {
        this.nameProjects = nameProjects;
    }

    public String getDescriptionProjects() {
        return descriptionProjects;
    }

    public void setDescriptionProjects(String descriptionProjects) {
        this.descriptionProjects = descriptionProjects;
    }

    public String getStackProjects() {
        return stackProjects;
    }

    public void setStackProjects(String stackProjects) {
        this.stackProjects = stackProjects;
    }

    public String getYearProjects() {
        return yearProjects;
    }

    public void setYearProjects(String yearProjects) {
        this.yearProjects = yearProjects;
    }

    public String getGithubProjects(){
        return githubProjects;
    }

    public void setGithubProjects(String githubProjects){
        this.githubProjects = githubProjects;
    }
}
