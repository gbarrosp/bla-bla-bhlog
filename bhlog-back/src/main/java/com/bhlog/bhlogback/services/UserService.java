package com.bhlog.bhlogback.services;

import java.util.Optional;

import com.bhlog.bhlogback.entities.UserEntity;

public interface UserService {

    Boolean existsByUsername(String username);

    Optional<UserEntity> findByUsername(String username);

    UserEntity saveUser(UserEntity user);
    
}
