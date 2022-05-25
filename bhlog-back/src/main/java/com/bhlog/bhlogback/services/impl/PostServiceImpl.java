package com.bhlog.bhlogback.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bhlog.bhlogback.entities.PostEntity;
import com.bhlog.bhlogback.repositories.PostRepository;
import com.bhlog.bhlogback.services.PostService;

@Service
public class PostServiceImpl implements PostService {
    
    @Autowired
    private PostRepository postRepository;

    @Override
    public List<PostEntity> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public Optional<PostEntity> getPost(UUID postId) {
        return postRepository.findById(postId);
    }

    @Override
    public PostEntity newPost(PostEntity post) {
        return postRepository.save(post);
    }

    @Override
    public void deletePost(PostEntity post) {
        postRepository.delete(post);
    }
}
