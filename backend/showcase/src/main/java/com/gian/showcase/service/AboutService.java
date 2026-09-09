package com.gian.showcase.service;

import com.gian.showcase.dto.aboutdto.AboutRequest;
import com.gian.showcase.dto.aboutdto.AboutResponse;
import com.gian.showcase.model.entity.About;

public interface AboutService {
    AboutResponse createAbout(AboutRequest request);
    About updateAbout(Long id, AboutRequest request);
}
