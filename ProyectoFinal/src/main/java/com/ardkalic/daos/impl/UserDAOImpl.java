package com.ardkalic.daos.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ardkalic.daos.UserDAO;
import com.ardkalic.entidades.AuthoritiesEntity;
import com.ardkalic.entidades.UsersEntity;
import com.ardkalic.repositories.AuthorityRepository;
import com.ardkalic.repositories.UserRepository;



@Service
public class UserDAOImpl implements UserDAO {
	
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private AuthorityRepository authRepo;
	
	public Integer anadirUser(String username, String nombre, String apellidos, Integer userPassword, String email,
			String direccion, String fecha,String rol) {
		AuthoritiesEntity auth = new AuthoritiesEntity(username,rol);		
		UsersEntity u = new UsersEntity(username,nombre,apellidos,userPassword,email,direccion,fecha);
		userRepo.save(u);
		authRepo.save(auth);
		return 1;
		
	}
}
