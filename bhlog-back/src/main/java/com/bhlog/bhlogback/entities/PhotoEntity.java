package com.bhlog.bhlogback.entities;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;

import org.hibernate.annotations.Type;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "photo")
public class PhotoEntity extends UUIDEntity {
	
	@Valid
	@ManyToOne(fetch = FetchType.EAGER)
	private PhotoAlbumEntity photoAlbum;

    @NotEmpty
	private String title;

	private String description;

    @NotEmpty
	@Type(type="org.hibernate.type.BinaryType")
	private byte[] content;

    @Column(name = "created_at")
    private Timestamp createdAt;

}
