package com.bhlog.bhlogback.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import com.bhlog.bhlogback.dtos.PostDto;
import com.bhlog.bhlogback.entities.PostEntity;
import com.bhlog.bhlogback.entities.UserEntity;
import com.bhlog.bhlogback.response.Response;
import com.bhlog.bhlogback.services.PostService;
import com.bhlog.bhlogback.services.UserService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/bhlog/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;
	
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
	public ResponseEntity<Response<List<PostEntity>>> getAllPosts() {
		Response<List<PostEntity>> response = new Response<List<PostEntity>>();

		try {
			List<PostEntity> posts = postService.getAllPosts();
			response.setData(posts);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    @PostMapping
	public ResponseEntity<Response<PostEntity>> newPost(@RequestBody @Valid PostDto post) {
		Response<PostEntity> response = new Response<PostEntity>();

		try {
			Optional<UserEntity> user = userService.findByUsername(post.getUser().getUsername());
			PostEntity newPost = modelMapper.map(post, PostEntity.class);
			newPost.setUser(user.get());
			postService.newPost(newPost);
			response.setData(newPost);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}
}
