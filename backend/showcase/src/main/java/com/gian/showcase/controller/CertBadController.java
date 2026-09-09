package com.gian.showcase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gian.showcase.dto.certbaddto.CertBadRequest;
import com.gian.showcase.dto.certbaddto.CertBadResponse;
import com.gian.showcase.model.entity.CertBad;
import com.gian.showcase.service.CertBadService;

@RestController
@RequestMapping("/certbads")
public class CertBadController {

    @Autowired
    private CertBadService service;

    @PostMapping
    public CertBadResponse createCertBad(@RequestBody CertBadRequest request) {
        return service.createCertBad(request);
    }

    @GetMapping
    public List<CertBad> getAllCertBads() {
        return service.getAllCertBads();
    }

    @PutMapping("/{id}")
    public CertBad updateCertBad(@PathVariable Long id, @RequestBody CertBadRequest request) {
        return service.updateCertBad(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteCertBad(@PathVariable Long id) {
        service.deleteCertBad(id);
    }
}
