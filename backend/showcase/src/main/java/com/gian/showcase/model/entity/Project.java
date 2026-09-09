package com.gian.showcase.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table (name = "projects")
public class Project {


    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name="id_projects")
    private Long idProjects;

    @Column (name="tech_projects")
    private String techProjects;

    @Column (name="name_projects")
    private String nameProjects;

    @Column (name="description_projects")
    private String descriptionProjects;

    @Column (name="stack_projects")
    private String stackProjects;

    @Column (name="year_projects")
    private String yearProjects;

    @Column (name="github_projects")
    private String githubProjects;

    public Long getIdProjects() {
        return idProjects;
    }

    public void setIdProjects(Long idProjects) {
        this.idProjects = idProjects;
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

    public String getGithubProject(){
        return githubProjects;
    }

    public void setGithubProject(String githubProjects){
        this.githubProjects = githubProjects;
    }
}
