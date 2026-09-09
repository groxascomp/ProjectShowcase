package com.gian.showcase.service;

import com.gian.showcase.dto.linkdto.LinkRequest;
import com.gian.showcase.dto.linkdto.LinkResponse;
import com.gian.showcase.model.entity.Link;

public interface LinkService {
    LinkResponse createLink (LinkRequest request);
    Link updateLink(Long id, LinkRequest request);
}
