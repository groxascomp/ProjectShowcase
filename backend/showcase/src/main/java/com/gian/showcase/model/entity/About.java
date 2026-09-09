package com.gian.showcase.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table (name="abouts")
public class About {

    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "id_about")
    private Long idAbout;

    @Column (name = "firstname_abouts")
    private String firstNameAbouts;

    @Column (name = "lastname_abouts")
    private String lastNameAbouts;

    @Column (name = "age_abouts")
    private String ageAbouts;

    @Column (name = "currentrole_abouts")
    private String currentRoleAbouts;

    @Column (name = "currentcompany_abouts")
    private String currentCompanyAbouts;

    @Column (name = "location_abouts")
    private String locationAbouts;

    @Column (name = "email_abouts")
    private String emailAbouts;

    @Column (name = "availability_abouts")
    private String availabilityAbouts;

    @Column (name = "line1_abouts")
    private String line1Abouts;

    @Column (name = "line2_abouts")
    private String line2Abouts;

    @Column (name = "line3_abouts")
    private String line3Abouts;

    public Long getIdAbout() {
        return idAbout;
    }

    public void setIdAbout(Long idAbout) {
        this.idAbout = idAbout;
    }

    public String getFirstNameAbouts() {
        return firstNameAbouts;
    }

    public void setFirstNameAbouts(String firstNameAbouts) {
        this.firstNameAbouts = firstNameAbouts;
    }

    public String getLastNameAbouts() {
        return lastNameAbouts;
    }

    public void setLastNameAbouts(String lastNameAbouts) {
        this.lastNameAbouts = lastNameAbouts;
    }

    public String getAgeAbouts() {
        return ageAbouts;
    }

    public void setAgeAbouts(String ageAbouts) {
        this.ageAbouts = ageAbouts;
    }

    public String getCurrentRoleAbouts() {
        return currentRoleAbouts;
    }

    public void setCurrentRoleAbouts(String currentRoleAbouts) {
        this.currentRoleAbouts = currentRoleAbouts;
    }

    public String getCurrentCompanyAbouts() {
        return currentCompanyAbouts;
    }

    public void setCurrentCompanyAbouts(String currentCompanyAbouts) {
        this.currentCompanyAbouts = currentCompanyAbouts;
    }

    public String getLocationAbouts() {
        return locationAbouts;
    }

    public void setLocationAbouts(String locationAbouts) {
        this.locationAbouts = locationAbouts;
    }

    public String getEmailAbouts() {
        return emailAbouts;
    }

    public void setEmailAbouts(String emailAbouts) {
        this.emailAbouts = emailAbouts;
    }

    public String getAvailabilityAbouts() {
        return availabilityAbouts;
    }

    public void setAvailabilityAbouts(String availabilityAbouts) {
        this.availabilityAbouts = availabilityAbouts;
    }

    public String getLine1Abouts() {
        return line1Abouts;
    }

    public void setLine1Abouts(String line1Abouts) {
        this.line1Abouts = line1Abouts;
    }

    public String getLine2Abouts() {
        return line2Abouts;
    }

    public void setLine2Abouts(String line2Abouts) {
        this.line2Abouts = line2Abouts;
    }

    public String getLine3Abouts() {
        return line3Abouts;
    }

    public void setLine3Abouts(String line3Abouts) {
        this.line3Abouts = line3Abouts;
    }


}
