package com.gian.showcase.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table (name="experiences")
public class Experience {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name="id_exp")
    private Long idExp;

    @Column (name="role_exp")
    private String roleExp;

    @Column (name="company_exp")
    private String companyExp;

    @Column (name="responsibility_exp")
    private String responsibilityExp;

    @Column (name="stack_exp")
    private String stackExp;

    @Column (name="start_exp")
    private String startExp;

    @Column (name="end_exp")
    private String endExp;

    @Column (name="type_exp")
    private String typeExp;

    public Long getIdExp() {
        return idExp;
    }

    public void setIdExp(Long idExp) {
        this.idExp = idExp;
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
