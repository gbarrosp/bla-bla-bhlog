package com.bhlog.bhlogback.repositories;

import java.util.UUID;

import com.bhlog.bhlogback.entities.PhotoEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepository extends JpaRepository<PhotoEntity, UUID> {
}
