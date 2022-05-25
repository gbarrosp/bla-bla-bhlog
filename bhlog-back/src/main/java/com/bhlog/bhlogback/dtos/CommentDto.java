package com.bhlog.bhlogback.dtos;

import java.sql.Timestamp;
import java.util.UUID;

import lombok.Data;

@Data
public class CommentDto {
    
	private UUID id;
		
	private String content;

    private UserDto user;
	
    private Timestamp createdAt;
}
