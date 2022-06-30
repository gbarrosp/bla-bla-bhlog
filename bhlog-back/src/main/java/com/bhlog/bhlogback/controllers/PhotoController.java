package com.bhlog.bhlogback.controllers;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import com.bhlog.bhlogback.dtos.PhotoDto;
import com.bhlog.bhlogback.response.Response;
import com.bhlog.bhlogback.services.PhotoService;
import com.bhlog.bhlogback.util.ExceptionTreatment;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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

	private static final Logger log = LoggerFactory.getLogger(PhotoController.class);

    @Autowired
    private PhotoService photoService;
	
    @GetMapping
	public ResponseEntity<Response<List<PhotoDto>>> getAllPhotos() {
		Response<List<PhotoDto>> response = new Response<List<PhotoDto>>();

		try {
			List<PhotoDto> photos = photoService.getAllPhotos();
			response.setData(photos);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("Get all photos error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    @GetMapping(value = "/album/{id}")
	public ResponseEntity<Response<List<PhotoDto>>> getAlbumPhotos(@PathVariable("id") String albumId) {
		Response<List<PhotoDto>> response = new Response<List<PhotoDto>>();

		try {
			List<PhotoDto> photos = photoService.getAlbumPhotos(UUID.fromString(albumId));
			response.setData(photos);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("Get photos by album id error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    @PostMapping
	public ResponseEntity<Response<PhotoDto>> newPhoto(@RequestBody @Valid PhotoDto photo) {
		Response<PhotoDto> response = new Response<PhotoDto>();

		try {
			PhotoDto newPhoto = photoService.newPhoto(photo);
			response.setData(newPhoto);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("New photo error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Response<String>> deletePhoto(@PathVariable("id") String photoId) {
		Response<String> response = new Response<String>();

		try {
			photoService.delete(UUID.fromString(photoId));
			response.setData(photoId);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("Delete photo error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}
}
