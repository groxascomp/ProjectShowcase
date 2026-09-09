package com.gian.showcase.dto.aboutdto;

public class AboutRequest {

    private String firstNameAbouts;
    private String lastNameAbouts;
    private String ageAbouts;
    private String currentRoleAbouts;
    private String currentCompanyAbouts;
    private String locationAbouts;
    private String emailAbouts;
    private String availabilityAbouts;
    private String line1Abouts;
    private String line2Abouts;
    private String line3Abouts;

    public AboutRequest(){}

    public AboutRequest(String firstNameAbouts, String lastNameAbouts, String ageAbouts,
            String currentRoleAbouts, String currentCompanyAbouts, String locationAbouts,
            String emailAbouts, String availabilityAbouts, String line1Abouts,
            String line2Abouts, String line3Abouts) {
        this.firstNameAbouts = firstNameAbouts;
        this.lastNameAbouts = lastNameAbouts;
        this.ageAbouts = ageAbouts;
        this.currentRoleAbouts = currentRoleAbouts;
        this.currentCompanyAbouts = currentCompanyAbouts;
        this.locationAbouts = locationAbouts;
        this.emailAbouts = emailAbouts;
        this.availabilityAbouts = availabilityAbouts;
        this.line1Abouts = line1Abouts;
        this.line2Abouts = line2Abouts;
        this.line3Abouts = line3Abouts;
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
