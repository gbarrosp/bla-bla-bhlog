package com.bhlog.bhlogback.repositories;

import java.util.UUID;
import java.util.List;
import java.util.Optional;

import com.bhlog.bhlogback.entities.PhotoAlbumEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoAlbumRepository extends JpaRepository<PhotoAlbumEntity, UUID> {
    Optional<List<PhotoAlbumEntity>> findByUserId(UUID userId);
}
