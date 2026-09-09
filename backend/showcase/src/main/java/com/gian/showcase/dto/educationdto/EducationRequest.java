package com.gian.showcase.dto.educationdto;

public class EducationRequest {
    private String courseEdu;
    private String schoolEdu;
    private String proudofEdu;
    private String startEdu;
    private String endEdu;

    public EducationRequest(){}

    public EducationRequest(String courseEdu, String schoolEdu, String proudofEdu, String startEdu, String endEdu){
        this.courseEdu = courseEdu;
        this.schoolEdu = schoolEdu;
        this.proudofEdu = proudofEdu;
        this.startEdu = startEdu;
        this.endEdu = endEdu;
    }

    public String getCourseEdu() {
        return courseEdu;
    }

    public void setCourseEdu(String courseEdu) {
        this.courseEdu = courseEdu;
    }

    public String getSchoolEdu() {
        return schoolEdu;
    }

    public void setSchoolEdu(String schoolEdu) {
        this.schoolEdu = schoolEdu;
    }

    public String getProudofEdu() {
        return proudofEdu;
    }

    public void setProudofEdu(String proudofEdu) {
        this.proudofEdu = proudofEdu;
    }

    public String getStartEdu() {
        return startEdu;
    }

    public void setStartEdu(String startEdu) {
        this.startEdu = startEdu;
    }

    public String getEndEdu() {
        return endEdu;
    }

    public void setEndEdu(String endEdu) {
        this.endEdu = endEdu;
    }
}
