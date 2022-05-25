package com.bhlog.bhlogback.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.bhlog.bhlogback.entities.PhotoAlbumEntity;
import com.bhlog.bhlogback.entities.UserEntity;

public interface PhotoAlbumService {
    Optional<List<PhotoAlbumEntity>> getAlbumsByUserId(UUID userId);

    PhotoAlbumEntity addAlbum(PhotoAlbumEntity album);

    PhotoAlbumEntity newAlbum(UserEntity user);

    void delete(PhotoAlbumEntity album);
}
