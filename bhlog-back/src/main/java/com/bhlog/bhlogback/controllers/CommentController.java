package com.bhlog.bhlogback.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.validation.Valid;

import com.bhlog.bhlogback.entities.CommentEntity;
import com.bhlog.bhlogback.entities.UserEntity;
import com.bhlog.bhlogback.response.Response;
import com.bhlog.bhlogback.services.CommentService;
import com.bhlog.bhlogback.services.UserService;

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
@RequestMapping("/api/bhlog/comments")
public class CommentController {

    @Autowired
    private UserService userService;

    @Autowired
    private CommentService commentService;

	@Autowired
	private ModelMapper modelMapper;

    @GetMapping("/{id}")
	public ResponseEntity<Response<List<CommentEntity>>> getCommentsByPostId(@PathVariable("id") String postId) {
		Response<List<CommentEntity>> response = new Response<List<CommentEntity>>();

		try {
			Optional<List<CommentEntity>> comments = commentService.getCommentsByPostId(UUID.fromString(postId));
			// List<CommentEntity> albumsDtos = albums.get().stream().map(album -> modelMapper.map(album, CommentEntity.class)).collect(Collectors.toList());

			response.setData(comments.get());
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    @PostMapping
	public ResponseEntity<Response<CommentEntity>> newAlbum(@RequestBody @Valid CommentEntity comment) {
		Response<CommentEntity> response = new Response<CommentEntity>();

		try {
			Optional<UserEntity> user = userService.findByUsername(comment.getUser().getUsername());
			CommentEntity newComment = modelMapper.map(comment, CommentEntity.class);
			newComment.setUser(user.get());
			commentService.newComment(newComment);

			response.setData(newComment);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    // @DeleteMapping(value = "/delete")
	// public ResponseEntity<Response<CommentEntity>> deleteAlbum(@RequestBody @Valid CommentEntity album) {
	// 	Response<CommentEntity> response = new Response<CommentEntity>();

	// 	try {
	// 		albumService.deleteAlbum(album);

	// 		response.setData(album);
	// 		return ResponseEntity.ok(response);

	// 	} catch (Exception e) {
	// 		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	// 	}
	// }
}
