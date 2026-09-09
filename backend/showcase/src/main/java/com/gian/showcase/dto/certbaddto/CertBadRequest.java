package com.gian.showcase.dto.certbaddto;

public class CertBadRequest {
    private String iconCb;
    private String nameCb;
    private String companyCb;
    private String yearCb;

    public CertBadRequest() {}

    public CertBadRequest(String iconCb, String nameCb, String companyCb, String yearCb) {
        this.iconCb = iconCb;
        this.nameCb = nameCb;
        this.companyCb = companyCb;
        this.yearCb = yearCb;
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
