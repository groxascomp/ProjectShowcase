package com.gian.showcase.dto.skilldto;

public class SkillResponse {
    private String languageSkills;
    private String frontendSkills;
    private String backendSkills;
    private String toolsSkills;

    public SkillResponse() {}

    public SkillResponse(String languageSkills, String frontendSkills, String backendSkills, String toolsSkills) {
        this.languageSkills = languageSkills;
        this.frontendSkills = frontendSkills;
        this.backendSkills = backendSkills;
        this.toolsSkills = toolsSkills;
    }

    public String getLanguageSkills() {
        return languageSkills;
    }

    public void setLanguageSkills(String languageSkills) {
        this.languageSkills = languageSkills;
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
