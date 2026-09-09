package com.gian.showcase.dto.experiencedto;

public class ExperienceRequest {

    private String roleExp;
    private String companyExp;
    private String responsibilityExp;
    private String stackExp;
    private String startExp;
    private String endExp;
    private String typeExp;

    public ExperienceRequest(){}

    public ExperienceRequest(String roleExp, String companyExp, String responsibilityExp,  String stackExp, String startExp, String endExp, String typeExp){
        this.roleExp = roleExp;
        this.companyExp =companyExp;
        this.responsibilityExp = responsibilityExp;
        this.stackExp = stackExp;
        this.startExp = startExp;
        this.endExp =endExp;
        this.typeExp = typeExp;
    }

    public String getRoleExp() {
        return roleExp;
    }

    public void setRoleExp(String roleExp) {
        this.roleExp = roleExp;
    }

    public String getCompanyExp() {
        return companyExp;
    }

    public void setCompanyExp(String companyExp) {
        this.companyExp = companyExp;
    }

    public String getResponsibilityExp() {
        return responsibilityExp;
    }

    public void setResponsibilityExp(String responsibilityExp) {
        this.responsibilityExp = responsibilityExp;
    }

    public String getStackExp() {
        return stackExp;
    }

    public void setStackExp(String stackExp) {
        this.stackExp = stackExp;
    }

    public String getStartExp() {
        return startExp;
    }

    public void setStartExp(String startExp) {
        this.startExp = startExp;
    }

    public String getEndExp() {
        return endExp;
    }

    public void setEndExp(String endExp) {
        this.endExp = endExp;
    }

    public String getTypeExp() {
        return typeExp;
    }

    public void setTypeExp(String typeExp) {
        this.typeExp = typeExp;
    }
}
