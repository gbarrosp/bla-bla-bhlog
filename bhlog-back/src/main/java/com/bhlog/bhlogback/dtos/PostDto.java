package com.bhlog.bhlogback.dtos;

import java.sql.Timestamp;
import java.util.UUID;

import lombok.Data;

@Data
public class PostDto {
    
	private UUID id;
	
	private String title;
	
	private String content;

    private UserDto user;

	private Integer commentsCounter;

    private Timestamp createdAt;
}
