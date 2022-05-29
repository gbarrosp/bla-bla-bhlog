package com.bhlog.bhlogback.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import com.bhlog.bhlogback.dtos.CommentDto;
import com.bhlog.bhlogback.entities.CommentEntity;
import com.bhlog.bhlogback.entities.UserEntity;
import com.bhlog.bhlogback.repositories.CommentRepository;
import com.bhlog.bhlogback.services.CommentService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {
    
    @Autowired
    private CommentRepository commentRepository;

	@Autowired
	private ModelMapper modelMapper;
    
    @Override
    public List<CommentDto> getCommentsByPostId(UUID postId) {
        Optional<List<CommentEntity>> comments = commentRepository.findByPostId(postId);
        List<CommentDto> commentsDtos = comments.stream().map(comment -> modelMapper.map(comment, CommentDto.class)).collect(Collectors.toList());
        return commentsDtos;
    }

    @Override
    public CommentDto newComment(CommentEntity comment, UserEntity user) {
        comment.setUser(user);
        commentRepository.save(comment);
        return modelMapper.map(comment, CommentDto.class);
    }

    @Override
    public void delete(UUID commentId) {
        commentRepository.deleteById(commentId);
    }
}
