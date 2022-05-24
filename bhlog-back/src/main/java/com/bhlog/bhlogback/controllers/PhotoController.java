package com.bhlog.bhlogback.controllers;

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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/bhlog/photos")
public class PhotoController {

    @Autowired
    private PhotoService photoService;
	
    @Autowired
    private ModelMapper modelMapper;

    // @GetMapping(value = "/all")
	// public ResponseEntity<Response<List<DoctorDto>>> getAllDoctors() {
	// 	Response<List<DoctorDto>> response = new Response<List<DoctorDto>>();

	// 	try {
	// 		List<PostEntity> doctorsList = doctorService.getAllDoctors();
	// 		List<DoctorDto> doctorsDtos = doctorsList.stream().map(doctor -> modelMapper.map(doctor, DoctorDto.class)).collect(Collectors.toList());

	// 		response.setData(doctorsDtos);
	// 		return ResponseEntity.ok(response);

	// 	} catch (Exception e) {
	// 		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	// 	}
	// }

    @PostMapping
	public ResponseEntity<Response<PhotoEntity>> newPatient(@RequestBody @Valid PhotoDto photo) {
		Response<PhotoEntity> response = new Response<PhotoEntity>();

		try {
			PhotoEntity newPhoto = modelMapper.map(photo, PhotoEntity.class);
			// newPhoto.setContent(photo.getContent().getBytes());
			// PhotoEntity newPhoto = new PhotoEntity();
			// newPhoto.setContent(photo.getBytes());
			photoService.newPhoto(newPhoto);

			response.setData(newPhoto);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}
}
