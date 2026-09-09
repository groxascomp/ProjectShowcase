package com.gian.showcase.dto.projectdto;

public class ProjectResponse {
    private String nameProject;

    public ProjectResponse(){}

    public ProjectResponse(String nameProject){
        this.nameProject = nameProject;
    }


    

    public String getNameProject() {
        return nameProject;
    }

    public void setNameProject(String nameProject) {
        this.nameProject = nameProject;
    }
    



}
