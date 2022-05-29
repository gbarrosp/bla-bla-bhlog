package com.bhlog.bhlogback.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.bhlog.bhlogback.dtos.PostDto;
import com.bhlog.bhlogback.entities.PostEntity;
import com.bhlog.bhlogback.entities.UserEntity;
import com.bhlog.bhlogback.response.Response;
import com.bhlog.bhlogback.services.PostService;
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
@RequestMapping("/api/bhlog/posts")
public class PostController {

	private static final Logger log = LoggerFactory.getLogger(PostController.class);

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;
	
    @GetMapping
	public ResponseEntity<Response<List<PostDto>>> getAllPosts() {
		Response<List<PostDto>> response = new Response<List<PostDto>>();

		try {
			List<PostDto> posts = postService.getAllPosts();
			response.setData(posts);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("Get all posts error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    @GetMapping(value = "/{id}")
	public ResponseEntity<Response<PostDto>> getPost(@PathVariable("id") String postId) {
		Response<PostDto> response = new Response<PostDto>();

		try {
			PostDto postDto = postService.getPost(UUID.fromString(postId));
			response.setData(postDto);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("Get post by id error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    @PostMapping
	public ResponseEntity<Response<PostDto>> newPost(@RequestBody @Valid PostEntity post) {
		Response<PostDto> response = new Response<PostDto>();

		try {
			Optional<UserEntity> user = userService.findByUsername(post.getUser().getUsername());
			PostDto newPost = postService.newPost(post, user.get());
			response.setData(newPost);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("New post error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Response<String>> deletePost(@PathVariable("id") String postId) {
		Response<String> response = new Response<String>();

		try {
			postService.delete(UUID.fromString(postId));
			response.setData(postId);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("Delete post error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}
}
