package com.bhlog.bhlogback.services;

import java.util.List;

import com.bhlog.bhlogback.entities.PostEntity;

public interface PostService {
    List<PostEntity> getAllPosts();

    PostEntity newPost(PostEntity post);

    void deletePost(PostEntity post);
}
