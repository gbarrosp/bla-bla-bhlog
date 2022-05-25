package com.bhlog.bhlogback.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.bhlog.bhlogback.dtos.PhotoAlbumDto;
import com.bhlog.bhlogback.entities.PhotoAlbumEntity;
import com.bhlog.bhlogback.entities.UserEntity;
import com.bhlog.bhlogback.response.Response;
import com.bhlog.bhlogback.services.PhotoAlbumService;
import com.bhlog.bhlogback.services.UserService;
import com.bhlog.bhlogback.util.ExceptionTreatment;

import org.modelmapper.ModelMapper;
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
@RequestMapping("/api/bhlog/albums")
public class PhotoAlbumController {

	private static final Logger log = LoggerFactory.getLogger(PhotoAlbumController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private PhotoAlbumService photoAlbumService;

	@Autowired
	private ModelMapper modelMapper;

    @GetMapping("/{username}")
	public ResponseEntity<Response<List<PhotoAlbumDto>>> getAlbumsByUsername(@PathVariable("username") String username) {
		Response<List<PhotoAlbumDto>> response = new Response<List<PhotoAlbumDto>>();

		try {
			Optional<UserEntity> user = userService.findByUsername(username);
			Optional<List<PhotoAlbumEntity>> albums = photoAlbumService.getAlbumsByUserId(user.get().getId());
			List<PhotoAlbumDto> albumsDtos = albums.get().stream().map(album -> modelMapper.map(album, PhotoAlbumDto.class)).collect(Collectors.toList());

			response.setData(albumsDtos);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("Get albums by username error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    @PostMapping
	public ResponseEntity<Response<PhotoAlbumDto>> newAlbum(@RequestBody @Valid PhotoAlbumDto album) {
		Response<PhotoAlbumDto> response = new Response<PhotoAlbumDto>();

		try {
			Optional<UserEntity> user = userService.findByUsername(album.getUser().getUsername());
			PhotoAlbumEntity newAlbum = modelMapper.map(album, PhotoAlbumEntity.class);
			newAlbum.setUser(user.get());
			photoAlbumService.addAlbum(newAlbum);

			album.setId(newAlbum.getId());
			response.setData(album);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("New photo album error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    @DeleteMapping("/{id}")
	public ResponseEntity<Response<String>> deleteAlbum(@PathVariable("id") String albumId) {
		Response<String> response = new Response<String>();

		try {
			photoAlbumService.delete(UUID.fromString(albumId));
			response.setData(albumId);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("Delete album error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}
}
