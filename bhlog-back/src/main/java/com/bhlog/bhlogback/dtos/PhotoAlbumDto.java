package com.bhlog.bhlogback.dtos;

import java.util.UUID;

import lombok.Data;

@Data
public class PhotoAlbumDto {
    
	private UUID id;
	
	private String title;

	private UserDto user;

}
