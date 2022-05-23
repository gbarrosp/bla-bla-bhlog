package com.bhlog.bhlogback.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bhlog.bhlogback.entities.UserEntity;
import com.bhlog.bhlogback.repositories.UserRepository;
import com.bhlog.bhlogback.security.UserPrinciple;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		UserEntity user = userRepository.findByUsername(username).orElseThrow(
				() -> new UsernameNotFoundException("Username not found : " + username));

		return UserPrinciple.build(user);
	}

}
