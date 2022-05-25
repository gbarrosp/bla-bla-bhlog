package com.bhlog.bhlogback.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.validation.Valid;

import com.bhlog.bhlogback.dtos.PhotoDto;
import com.bhlog.bhlogback.entities.PhotoEntity;
import com.bhlog.bhlogback.response.Response;
import com.bhlog.bhlogback.services.PhotoService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/bhlog/photos")
public class PhotoController {

    @Autowired
    private PhotoService photoService;
	
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
	public ResponseEntity<Response<List<PhotoEntity>>> getAllPhotos() {
		Response<List<PhotoEntity>> response = new Response<List<PhotoEntity>>();

		try {
			List<PhotoEntity> photos = photoService.getAllPhotos();
			response.setData(photos);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    @GetMapping(value = "/album/{id}")
	public ResponseEntity<Response<List<PhotoEntity>>> getAlbumPhotos(@PathVariable("id") String albumId) {
		Response<List<PhotoEntity>> response = new Response<List<PhotoEntity>>();

		try {
			Optional<List<PhotoEntity>> photos = photoService.getAlbumPhotos(UUID.fromString(albumId));
			response.setData(photos.get());
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    @PostMapping
	public ResponseEntity<Response<PhotoEntity>> newPhoto(@RequestBody @Valid PhotoDto photo) {
		Response<PhotoEntity> response = new Response<PhotoEntity>();

		try {
			PhotoEntity newPhoto = modelMapper.map(photo, PhotoEntity.class);
			photoService.newPhoto(newPhoto);
			response.setData(newPhoto);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}
}
