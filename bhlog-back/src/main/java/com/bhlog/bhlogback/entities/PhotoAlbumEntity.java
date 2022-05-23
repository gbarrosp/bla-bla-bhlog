package com.bhlog.bhlogback.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.Valid;
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
@Table(name = "photo_album")
public class PhotoAlbumEntity extends UUIDEntity {
	
    @NotNull
	@Valid
	@ManyToOne(fetch = FetchType.EAGER)
	private UserEntity user;

    @NotEmpty
	private String title;

}
