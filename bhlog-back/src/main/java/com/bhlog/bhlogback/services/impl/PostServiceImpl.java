package com.bhlog.bhlogback.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bhlog.bhlogback.dtos.PostDto;
import com.bhlog.bhlogback.entities.PostEntity;
import com.bhlog.bhlogback.entities.UserEntity;
import com.bhlog.bhlogback.repositories.PostRepository;
import com.bhlog.bhlogback.services.PostService;

@Service
public class PostServiceImpl implements PostService {
    
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private ModelMapper modelMapper;
    
    @Override
    public List<PostDto> getAllPosts() {
        List<PostEntity> posts = postRepository.findAll();
        List<PostDto> postsDtos = posts.stream().map(post -> modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
        return postsDtos;
    }

    @Override
    public PostDto getPost(UUID postId) {
        PostDto post = modelMapper.map(postRepository.findById(postId), PostDto.class);
        return post;
    }

    @Override
    public PostDto newPost(PostEntity post, UserEntity user) {
        post.setUser(user);
        postRepository.save(post);
        return modelMapper.map(post, PostDto.class);
    }

    @Override
    public void delete(UUID postId) {
        postRepository.deleteById(postId);
    }

    @Override
    public void increseCommentsCounter(UUID postId) {
        Optional<PostEntity> post = postRepository.findById(postId);
        post.get().setCommentsCounter(post.get().getCommentsCounter() + 1);
        postRepository.save(post.get());
    }
}
