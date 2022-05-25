package com.bhlog.bhlogback.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.bhlog.bhlogback.entities.CommentEntity;

public interface CommentService {

    Optional<List<CommentEntity>> getCommentsByPostId(UUID postId);

    CommentEntity newComment(CommentEntity comment);

    void deleteComment(CommentEntity comment);
}
