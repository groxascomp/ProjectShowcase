package com.gian.showcase.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table (name="certbads")
public class CertBad {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name="id_cb")
    private Long idCb;

    @Column (name = "icon_cb")
    private String iconCb;

    @Column (name = "name_cb")
    private String nameCb;

    @Column (name = "company_cb")
    private String companyCb;

    @Column (name = "year_cb")
    private String yearCb;

    public Long getIdCb() {
        return idCb;
    }

    public void setIdCb(Long idCb) {
        this.idCb = idCb;
    }

    public String getIconCb() {
        return iconCb;
    }

    public void setIconCb(String iconCb) {
        this.iconCb = iconCb;
    }

    public String getNameCb() {
        return nameCb;
    }

    public void setNameCb(String nameCb) {
        this.nameCb = nameCb;
    }

    public String getCompanyCb() {
        return companyCb;
    }

    public void setCompanyCb(String companyCb) {
        this.companyCb = companyCb;
    }

    public String getYearCb() {
        return yearCb;
    }

    public void setYearCb(String yearCb) {
        this.yearCb = yearCb;
    }
}
