package com.bhlog.bhlogback.services;

import java.util.List;
import java.util.UUID;

import com.bhlog.bhlogback.dtos.PostDto;
import com.bhlog.bhlogback.entities.PostEntity;
import com.bhlog.bhlogback.entities.UserEntity;

public interface PostService {
    List<PostDto> getAllPosts();

    PostDto newPost(PostEntity post, UserEntity user);

    PostDto getPost(UUID postId);

    void increseCommentsCounter(UUID postId);

    void delete(UUID postId);
}
