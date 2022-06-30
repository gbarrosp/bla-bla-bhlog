package com.bhlog.bhlogback.services;

import java.util.List;
import java.util.UUID;

import com.bhlog.bhlogback.dtos.PhotoDto;

public interface PhotoService {
    List<PhotoDto> getAllPhotos();

    List<PhotoDto> getAlbumPhotos(UUID albumId);

    PhotoDto newPhoto(PhotoDto photo);

    void delete(UUID photoId);
}
