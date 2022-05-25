package com.bhlog.bhlogback.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.bhlog.bhlogback.entities.PhotoAlbumEntity;
import com.bhlog.bhlogback.entities.UserEntity;
import com.bhlog.bhlogback.repositories.PhotoAlbumRepository;
import com.bhlog.bhlogback.services.PhotoAlbumService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhotoAlbumServiceImpl implements PhotoAlbumService {
    
    @Autowired
    private PhotoAlbumRepository photoAlbumRepository;

    @Override
    public Optional<List<PhotoAlbumEntity>> getAlbumsByUserId(UUID userId) {
        return photoAlbumRepository.findByUserId(userId);
    }

    @Override
    public PhotoAlbumEntity newAlbum(UserEntity user) {
        PhotoAlbumEntity album = new PhotoAlbumEntity();
        album.setTitle("Meu primeiro álbum");
        album.setDescription("Memórias incríveis!");
        album.setUser(user);
        return photoAlbumRepository.save(album);
    }

    @Override
    public PhotoAlbumEntity addAlbum(PhotoAlbumEntity album) {
        return photoAlbumRepository.save(album);
    }

    @Override
    public void delete(UUID albumId) {
        photoAlbumRepository.deleteById(albumId);
    }
}
