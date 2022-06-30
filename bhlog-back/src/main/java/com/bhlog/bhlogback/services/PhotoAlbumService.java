package com.bhlog.bhlogback.services;

import java.util.List;
import java.util.UUID;

import com.bhlog.bhlogback.dtos.PhotoAlbumDto;
import com.bhlog.bhlogback.entities.PhotoAlbumEntity;
import com.bhlog.bhlogback.entities.UserEntity;

public interface PhotoAlbumService {
    List<PhotoAlbumDto> getAlbumsByUserId(UUID userId);

    PhotoAlbumDto addAlbum(PhotoAlbumDto album, UserEntity user);

    PhotoAlbumEntity createFirstAlbum(UserEntity user);

    void delete(UUID albumId);
}
