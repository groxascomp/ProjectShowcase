package com.gian.showcase.dto.experiencedto;

public class ExperienceResponse {
    private String roleExp;
    private String companyExp;

    public ExperienceResponse(){}

    public ExperienceResponse(String roleExp, String companyExp){
        this.roleExp = roleExp;
        this.companyExp = companyExp;

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
}
