package com.bhlog.bhlogback.repositories;

import java.util.Optional;
import java.util.UUID;

import com.bhlog.bhlogback.entities.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, UUID> {
    Boolean existsByUsername(String username);

    Optional<UserEntity> findByUsername(String username);

}
