package com.bhlog.bhlogback.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import com.bhlog.bhlogback.dtos.PhotoDto;
import com.bhlog.bhlogback.entities.PhotoEntity;
import com.bhlog.bhlogback.repositories.PhotoRepository;
import com.bhlog.bhlogback.services.PhotoService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhotoServiceImpl implements PhotoService {
    
    @Autowired
    private PhotoRepository photoRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<PhotoDto> getAllPhotos() {
        return photoRepository.findAll().stream().map(photo -> modelMapper.map(photo, PhotoDto.class)).collect(Collectors.toList());
    }

    @Override
    public List<PhotoDto> getAlbumPhotos(UUID albumId) {
        Optional<List<PhotoEntity>> photos = photoRepository.findByPhotoAlbumId(albumId);
        List<PhotoDto> photosDtos = photos.get().stream().map(photo -> modelMapper.map(photo, PhotoDto.class)).collect(Collectors.toList());
        return photosDtos;
    }

    @Override
    public PhotoDto newPhoto(PhotoDto photo) {
        PhotoEntity newPhoto = photoRepository.save(modelMapper.map(photo, PhotoEntity.class));
        photo.setId(newPhoto.getId());
        return photo;
    }

    @Override
    public void delete(UUID photoId) {
        photoRepository.deleteById(photoId);
    }
}
