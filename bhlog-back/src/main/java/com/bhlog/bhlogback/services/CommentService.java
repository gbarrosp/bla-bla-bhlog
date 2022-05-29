package com.bhlog.bhlogback.services;

import java.util.List;
import java.util.UUID;

import com.bhlog.bhlogback.dtos.CommentDto;
import com.bhlog.bhlogback.entities.CommentEntity;
import com.bhlog.bhlogback.entities.UserEntity;

public interface CommentService {

    List<CommentDto> getCommentsByPostId(UUID postId);

    CommentDto newComment(CommentEntity comment, UserEntity user);

    void delete(UUID commentId);
}
