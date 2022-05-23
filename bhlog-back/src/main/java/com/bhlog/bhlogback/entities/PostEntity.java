package com.bhlog.bhlogback.entities;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "post")
public class PostEntity extends UUIDEntity {
	
	@Valid
	@ManyToOne(fetch = FetchType.EAGER)
	private UserEntity user;

    @NotEmpty
	private String title;

    @NotEmpty
	private String content;

    @Column(name = "created_at")
    private Timestamp createdAt;

}
