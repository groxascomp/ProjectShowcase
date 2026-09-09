package com.gian.showcase.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table (name="skills")
public class Skill {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "id_skills")
    private Long idSkills;

    @Column (name = "languages_skills")
    private String languagesSkills;

    @Column (name = "frontend_skills")
    private String frontendSkills;

    @Column (name = "backend_skills")
    private String backendSkills;

    @Column (name = "tools_skills")
    private String toolsSkills;

    public Long getIdSkills() {
        return idSkills;
    }

    public void setIdSkills(Long idSkills) {
        this.idSkills = idSkills;
    }

    public String getLanguagesSkills() {
        return languagesSkills;
    }

    public void setLanguagesSkills(String languagesSkills) {
        this.languagesSkills = languagesSkills;
    }

    public String getFrontendSkills() {
        return frontendSkills;
    }

    public void setFrontendSkills(String frontendSkills) {
        this.frontendSkills = frontendSkills;
    }

    public String getBackendSkills() {
        return backendSkills;
    }

    public void setBackendSkills(String backendSkills) {
        this.backendSkills = backendSkills;
    }

    public String getToolsSkills() {
        return toolsSkills;
    }

    public void setToolsSkills(String toolsSkills) {
        this.toolsSkills = toolsSkills;
    }
}