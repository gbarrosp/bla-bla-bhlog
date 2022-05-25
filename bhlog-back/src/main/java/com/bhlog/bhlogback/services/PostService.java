package com.bhlog.bhlogback.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.bhlog.bhlogback.entities.PostEntity;

public interface PostService {
    List<PostEntity> getAllPosts();

    PostEntity newPost(PostEntity post);

    Optional<PostEntity> getPost(UUID postId);

    void increseCommentsCounter(UUID postId);

    void deletePost(PostEntity post);
}
