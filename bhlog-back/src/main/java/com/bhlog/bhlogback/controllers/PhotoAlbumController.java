package com.bhlog.bhlogback.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.bhlog.bhlogback.dtos.PhotoAlbumDto;
import com.bhlog.bhlogback.entities.PhotoAlbumEntity;
import com.bhlog.bhlogback.response.Response;
import com.bhlog.bhlogback.services.PhotoAlbumService;

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
@RequestMapping("/api/bhlog/albums")
public class PhotoAlbumController {

    @Autowired
    private PhotoAlbumService photoAlbumService;

	@Autowired
	private ModelMapper modelMapper;

    @GetMapping("/user/{id}")
	public ResponseEntity<Response<List<PhotoAlbumDto>>> getAlbumsByUserId(@PathVariable("id") String userId) {
		Response<List<PhotoAlbumDto>> response = new Response<List<PhotoAlbumDto>>();

		try {
			UUID id = UUID.fromString(userId);
			Optional<List<PhotoAlbumEntity>> albums = photoAlbumService.getAlbumsByUserId(id);
			List<PhotoAlbumDto> albumsDtos = albums.get().stream().map(album -> modelMapper.map(album, PhotoAlbumDto.class)).collect(Collectors.toList());

			response.setData(albumsDtos);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    @PostMapping()
	public ResponseEntity<Response<PhotoAlbumEntity>> newPatient(@RequestBody @Valid PhotoAlbumDto album) {
		Response<PhotoAlbumEntity> response = new Response<PhotoAlbumEntity>();

		try {
			PhotoAlbumEntity newAlbum = modelMapper.map(album, PhotoAlbumEntity.class);
			photoAlbumService.newAlbum(newAlbum);

			response.setData(newAlbum);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    // @DeleteMapping(value = "/delete")
	// public ResponseEntity<Response<PhotoAlbumEntity>> deletePatiente(@RequestBody @Valid PhotoAlbumEntity patient) {
	// 	Response<PhotoAlbumEntity> response = new Response<PhotoAlbumEntity>();

	// 	try {
	// 		patientService.deletePatient(patient);

	// 		response.setData(patient);
	// 		return ResponseEntity.ok(response);

	// 	} catch (Exception e) {
	// 		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	// 	}
	// }
}
