package com.bhlog.bhlogback.entities;


import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "comment")
public class CommentEntity extends UUIDEntity {

	@NotNull
	@ManyToOne(fetch = FetchType.EAGER)
	private UserEntity user;

	@NotNull
	@ManyToOne(fetch = FetchType.EAGER)
	private PostEntity post;

	@NotEmpty
	private String content;

    @Column(name = "created_at")
    private Timestamp createdAt;

}
