package com.bhlog.bhlogback.services.impl;

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
    public CommentEntity newComment(CommentEntity comment) {
        return commentRepository.save(comment);
    }

    @Override
    public void deleteComment(CommentEntity comment) {
        commentRepository.delete(comment);
    }
}
