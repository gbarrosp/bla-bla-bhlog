package com.bhlog.bhlogback.services;

import java.util.List;

import com.bhlog.bhlogback.entities.PhotoEntity;

public interface PhotoService {
    List<PhotoEntity> getAllPhotos();

    PhotoEntity newPhoto(PhotoEntity post);

    void delete(PhotoEntity post);
}
