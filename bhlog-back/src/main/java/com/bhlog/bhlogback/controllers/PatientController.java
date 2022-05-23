// package com.bhlog.bhlogback.controllers;

// import java.util.List;

// import javax.validation.Valid;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PatchMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.bhlog.bhlogback.entities.CommentEntity;
// import com.bhlog.bhlogback.response.Response;
// import com.bhlog.bhlogback.services.PatientService;

// @CrossOrigin(origins = "*", maxAge = 3600)
// @RestController
// @RequestMapping("/api/patient")
// public class PatientController {

//     @Autowired
//     private PatientService patientService;

//     @GetMapping(value = "/all")
// 	public ResponseEntity<Response<List<CommentEntity>>> getAllPatients() {
// 		Response<List<CommentEntity>> response = new Response<List<CommentEntity>>();

// 		try {
// 			List<CommentEntity> patientsList = patientService.getAllPatients();

// 			response.setData(patientsList);
// 			return ResponseEntity.ok(response);

// 		} catch (Exception e) {
// 			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
// 		}
// 	}

//     @PostMapping(value = "/new")
// 	public ResponseEntity<Response<CommentEntity>> newPatient(@RequestBody @Valid CommentEntity patient) {
// 		Response<CommentEntity> response = new Response<CommentEntity>();

// 		try {
// 			CommentEntity newPatient = patientService.newPatient(patient);

// 			response.setData(newPatient);
// 			return ResponseEntity.ok(response);

// 		} catch (Exception e) {
// 			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
// 		}
// 	}

//     @PatchMapping(value = "/edit")
// 	public ResponseEntity<Response<CommentEntity>> editPatient(@RequestBody @Valid CommentEntity patient) {
// 		Response<CommentEntity> response = new Response<CommentEntity>();

// 		try {
// 			CommentEntity editedPatient = patientService.editPatient(patient);

// 			response.setData(editedPatient);
// 			return ResponseEntity.ok(response);

// 		} catch (Exception e) {
// 			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
// 		}
// 	}

//     @DeleteMapping(value = "/delete")
// 	public ResponseEntity<Response<CommentEntity>> deletePatiente(@RequestBody @Valid CommentEntity patient) {
// 		Response<CommentEntity> response = new Response<CommentEntity>();

// 		try {
// 			patientService.deletePatient(patient);

// 			response.setData(patient);
// 			return ResponseEntity.ok(response);

// 		} catch (Exception e) {
// 			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
// 		}
// 	}
// }
