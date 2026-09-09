package com.gian.showcase.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gian.showcase.dto.certbaddto.CertBadRequest;
import com.gian.showcase.dto.certbaddto.CertBadResponse;
import com.gian.showcase.model.entity.CertBad;
import com.gian.showcase.repository.CertBadRepository;
import com.gian.showcase.service.CertBadService;

@Service
public class CertBadServiceImpl implements CertBadService {

    @Autowired
    private CertBadRepository certBadRepository;

    @Override
    public CertBadResponse createCertBad(CertBadRequest request) {
        CertBad certBad = new CertBad();
        certBad.setIconCb(request.getIconCb());
        certBad.setNameCb(request.getNameCb());
        certBad.setCompanyCb(request.getCompanyCb());
        certBad.setYearCb(request.getYearCb());

        CertBad saved = certBadRepository.save(certBad);

        CertBadResponse response = new CertBadResponse();
        response.setIconCb(saved.getIconCb());
        response.setNameCb(saved.getNameCb());
        response.setCompanyCb(saved.getCompanyCb());
        response.setYearCb(saved.getYearCb());

        return response;
    }

    @Override
    public List<CertBad> getAllCertBads() {
        return certBadRepository.findAll();
    }

    @Override
    public CertBad updateCertBad(Long id, CertBadRequest request) {
        CertBad certBad = certBadRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Certificate not found"));

        certBad.setIconCb(request.getIconCb());
        certBad.setNameCb(request.getNameCb());
        certBad.setCompanyCb(request.getCompanyCb());
        certBad.setYearCb(request.getYearCb());

        return certBadRepository.save(certBad);
    }

    @Override
    public void deleteCertBad(Long id) {
        certBadRepository.deleteById(id);
    }
}
