package com.bhlog.bhlogback.services;

import com.bhlog.bhlogback.entities.CommentEntity;

public interface CommentService {

    CommentEntity newComment(CommentEntity comment);

    void deleteComment(CommentEntity comment);
}
