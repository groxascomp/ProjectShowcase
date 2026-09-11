package com.gian.showcase.service;

import java.util.List;

import com.gian.showcase.dto.linkdto.LinkRequest;
import com.gian.showcase.dto.linkdto.LinkResponse;
import com.gian.showcase.model.entity.Link;

public interface LinkService {
    LinkResponse createLink (LinkRequest request);
    List<Link> getAllLinks();
    Link updateLink(Long id, LinkRequest request);
}
