package com.bhlog.bhlogback.controllers;

import javax.validation.Valid;

import com.bhlog.bhlogback.dtos.LoginFormDTO;
import com.bhlog.bhlogback.entities.PhotoAlbumEntity;
import com.bhlog.bhlogback.entities.UserEntity;
import com.bhlog.bhlogback.response.Response;
import com.bhlog.bhlogback.security.JwtProvider;
import com.bhlog.bhlogback.services.PhotoAlbumService;
import com.bhlog.bhlogback.services.UserService;
import com.bhlog.bhlogback.util.ExceptionTreatment;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthAPIController {

    private static final Logger log = LoggerFactory.getLogger(AuthAPIController.class);
	
	@Autowired
	ModelMapper modelMapper;
	
	@Autowired
    AuthenticationManager authenticationManager;
 
    @Autowired
    private UserService userService;
 
    @Autowired
    private PhotoAlbumService photoAlbumService;
   
    @Autowired
    PasswordEncoder encoder;
 
    @Autowired
    JwtProvider jwtProvider;

    @Value("${mercy.app.jwtExpiration}")
    private int jwtExpiration;
    
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginFormDTO loginRequest) {
    	Response<String> response = new Response<String>();
        
        try {
            response.setData(getAuthToken(loginRequest.getUsername(), loginRequest.getPassword()));
            log.info("User has logged in successfully!");

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ExceptionTreatment.setExceptionMessage("Error while signing in. ", e, response, log);
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);
        }
    }

    @PostMapping(value = "/sign-up")
	public ResponseEntity<Response<?>> newUser(@Valid @RequestBody UserEntity user) {
		Response<String> response = new Response<String>();

		try {
			if (userService.existsByUsername(user.getUsername())) {
                response.setError("Username not available");
				return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
			}
            
            String decodedPassword = user.getPassword();
			user.setPassword(encoder.encode(user.getPassword()));
			userService.saveUser(user);
            photoAlbumService.newAlbum(user);

            response.setData(getAuthToken(user.getUsername(), decodedPassword));
			return ResponseEntity.ok(response);

		} catch (Exception e) {
            response.setError(e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}
  
    private String getAuthToken(String username, String password){
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(username,password)
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateJwtToken(authentication);
        return jwt;
    }
}



