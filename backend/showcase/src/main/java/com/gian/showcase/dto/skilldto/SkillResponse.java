package com.gian.showcase.dto.skilldto;

public class SkillResponse {
    private String languagesSkills;
    private String frontendSkills;
    private String backendSkills;
    private String toolsSkills;

    public SkillResponse() {}

    public SkillResponse(String languagesSkills, String frontendSkills, String backendSkills, String toolsSkills) {
        this.languagesSkills = languagesSkills;
        this.frontendSkills = frontendSkills;
        this.backendSkills = backendSkills;
        this.toolsSkills = toolsSkills;
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
