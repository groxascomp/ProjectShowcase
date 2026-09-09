package com.gian.showcase.dto.educationdto;

public class EducationResponse {
    private String schoolEdu;

    public EducationResponse(){}

    public EducationResponse(String schoolEdu){
        this.schoolEdu = schoolEdu;
    }

    public String getSchoolEdu() {
        return schoolEdu;
    }

    public void setSchoolEdu(String schoolEdu) {
        this.schoolEdu = schoolEdu;
    }
}
