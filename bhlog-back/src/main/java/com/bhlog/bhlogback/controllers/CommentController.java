package com.bhlog.bhlogback.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.bhlog.bhlogback.dtos.CommentDto;
import com.bhlog.bhlogback.entities.CommentEntity;
import com.bhlog.bhlogback.entities.UserEntity;
import com.bhlog.bhlogback.response.Response;
import com.bhlog.bhlogback.services.CommentService;
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
@RequestMapping("/api/bhlog/comments")
public class CommentController {

	private static final Logger log = LoggerFactory.getLogger(CommentController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private CommentService commentService;

    @Autowired
    private PostService postService;

	@Autowired
	private ModelMapper modelMapper;

    @GetMapping("/post/{id}")
	public ResponseEntity<Response<List<CommentDto>>> getCommentsByPostId(@PathVariable("id") String postId) {
		Response<List<CommentDto>> response = new Response<List<CommentDto>>();

		try {
			Optional<List<CommentEntity>> comments = commentService.getCommentsByPostId(UUID.fromString(postId));
			List<CommentDto> commentsDtos = comments.get().stream().map(comment -> modelMapper.map(comment, CommentDto.class)).collect(Collectors.toList());

			response.setData(commentsDtos);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("Get comments by post id error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

    @PostMapping
	public ResponseEntity<Response<CommentDto>> newComment(@RequestBody @Valid CommentEntity comment) {
		Response<CommentDto> response = new Response<CommentDto>();

		try {
			Optional<UserEntity> user = userService.findByUsername(comment.getUser().getUsername());
			comment.setUser(user.get());
			commentService.newComment(comment);
			postService.increseCommentsCounter(comment.getPost().getId());
			CommentDto newComment = modelMapper.map(comment, CommentDto.class);
			response.setData(newComment);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("New comment error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Response<String>> deleteComment(@PathVariable("id") String commentId) {
		Response<String> response = new Response<String>();

		try {
			commentService.delete(UUID.fromString(commentId));
			response.setData(commentId);
			return ResponseEntity.ok(response);

		} catch (Exception e) {
			ExceptionTreatment.setExceptionMessage("Delete comment error. ", e, response, log);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}
}
