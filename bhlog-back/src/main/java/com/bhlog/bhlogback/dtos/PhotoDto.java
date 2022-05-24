package com.bhlog.bhlogback.dtos;

import java.sql.Timestamp;
import java.util.UUID;

import lombok.Data;

@Data
public class PhotoDto {
    
	private UUID id;
	
	private String title;
	
	private String description;

	private byte[] content;

    private PhotoAlbumDto photoAlbum;

    private Timestamp createdAt;
}
