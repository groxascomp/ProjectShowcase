package com.gian.showcase.service;

import java.util.List;

import com.gian.showcase.dto.certbaddto.CertBadRequest;
import com.gian.showcase.dto.certbaddto.CertBadResponse;
import com.gian.showcase.model.entity.CertBad;

public interface CertBadService {
    CertBadResponse createCertBad(CertBadRequest request);
    List<CertBad> getAllCertBads();
    CertBad updateCertBad(Long id, CertBadRequest request);
    void deleteCertBad(Long id);
}
