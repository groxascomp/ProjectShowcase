package com.gian.showcase.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table (name="educations")
public class Education {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name="id_edu")
    private Long idEdu;

    @Column (name="course_edu")
    private String courseEdu;

    @Column (name="school_edu")
    private String schoolEdu;

    @Column (name="proudof_edu")
    private String proudofEdu;

    @Column (name="start_edu")
    private String startEdu;

    @Column (name="end_edu")
    private String endEdu;

    public Long getIdEdu() {
        return idEdu;
    }

    public void setIdEdu(Long idEdu) {
        this.idEdu = idEdu;
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
