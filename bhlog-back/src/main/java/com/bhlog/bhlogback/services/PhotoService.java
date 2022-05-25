package com.bhlog.bhlogback.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.bhlog.bhlogback.entities.PhotoEntity;

public interface PhotoService {
    List<PhotoEntity> getAllPhotos();

    Optional<List<PhotoEntity>> getAlbumPhotos(UUID albumId);

    PhotoEntity newPhoto(PhotoEntity photo);

    void delete(UUID photoId);
}
