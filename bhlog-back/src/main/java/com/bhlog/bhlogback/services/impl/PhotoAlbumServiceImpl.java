package com.bhlog.bhlogback.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import com.bhlog.bhlogback.dtos.PhotoAlbumDto;
import com.bhlog.bhlogback.entities.PhotoAlbumEntity;
import com.bhlog.bhlogback.entities.UserEntity;
import com.bhlog.bhlogback.repositories.PhotoAlbumRepository;
import com.bhlog.bhlogback.services.PhotoAlbumService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhotoAlbumServiceImpl implements PhotoAlbumService {
    
    @Autowired
    private PhotoAlbumRepository photoAlbumRepository;

	@Autowired
	private ModelMapper modelMapper;
    
    @Override
    public List<PhotoAlbumDto> getAlbumsByUserId(UUID userId) {
        Optional<List<PhotoAlbumEntity>> albums = photoAlbumRepository.findAllByUserId(userId);
        List<PhotoAlbumDto> albumsDtos = albums.get().stream().map(album -> modelMapper.map(album, PhotoAlbumDto.class)).collect(Collectors.toList());
        return albumsDtos;
    }

    @Override
    public PhotoAlbumEntity createFirstAlbum(UserEntity user) {
        PhotoAlbumEntity album = new PhotoAlbumEntity();
        album.setTitle("Meu primeiro álbum");
        album.setDescription("Memórias incríveis!");
        album.setUser(user);
        return photoAlbumRepository.save(album);
    }

    @Override
    public PhotoAlbumDto addAlbum(PhotoAlbumDto album, UserEntity user) {
        PhotoAlbumEntity newAlbum = modelMapper.map(album, PhotoAlbumEntity.class);
        newAlbum.setUser(user);
        photoAlbumRepository.save(newAlbum);
        album.setId(newAlbum.getId());
        return album;
    }

    @Override
    public void delete(UUID albumId) {
        photoAlbumRepository.deleteById(albumId);
    }
}
