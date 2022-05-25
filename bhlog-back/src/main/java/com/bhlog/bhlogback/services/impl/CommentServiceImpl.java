package com.bhlog.bhlogback.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.bhlog.bhlogback.entities.CommentEntity;
import com.bhlog.bhlogback.repositories.CommentRepository;
import com.bhlog.bhlogback.services.CommentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {
    
    @Autowired
    private CommentRepository commentRepository;

    @Override
    public Optional<List<CommentEntity>> getCommentsByPostId(UUID postId) {
        return commentRepository.findByPostId(postId);
    }

    @Override
    public CommentEntity newComment(CommentEntity comment) {
        return commentRepository.save(comment);
    }

    @Override
    public void delete(UUID commentId) {
        commentRepository.deleteById(commentId);
    }
}
