package com.bhlog.bhlogback.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user", schema = "public")
public class UserEntity extends UUIDEntity {

	@NotEmpty
	private String name;

	@NotEmpty
	private String username;

	@NotEmpty
	@Size(min = 6, max = 100)
	private String password;

}
