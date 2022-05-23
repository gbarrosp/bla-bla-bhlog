package com.bhlog.bhlogback.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.bhlog.bhlogback.entities.PhotoAlbumEntity;

public interface PhotoAlbumService {
    Optional<List<PhotoAlbumEntity>> getAlbumsByUserId(UUID userId);

    PhotoAlbumEntity newAlbum(PhotoAlbumEntity album);

    void delete(PhotoAlbumEntity album);
}
