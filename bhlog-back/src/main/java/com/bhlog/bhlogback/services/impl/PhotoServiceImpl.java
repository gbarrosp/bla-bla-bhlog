package com.bhlog.bhlogback.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.bhlog.bhlogback.entities.PhotoEntity;
import com.bhlog.bhlogback.repositories.PhotoRepository;
import com.bhlog.bhlogback.services.PhotoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhotoServiceImpl implements PhotoService {
    
    @Autowired
    private PhotoRepository photoRepository;

    @Override
    public List<PhotoEntity> getAllPhotos() {
        return photoRepository.findAll();
    }

    @Override
    public Optional<List<PhotoEntity>> getAlbumPhotos(UUID albumId) {
        return photoRepository.findByPhotoAlbumId(albumId);
    }

    @Override
    public PhotoEntity newPhoto(PhotoEntity photo) {
        return photoRepository.save(photo);
    }

    @Override
    public void delete(UUID photoId) {
        photoRepository.deleteById(photoId);
    }
}
