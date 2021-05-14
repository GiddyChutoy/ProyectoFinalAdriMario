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
	
	public boolean anadirUser(String username, String nombre, String apellidos, String userPassword, String email,
			String direccion, String fecha) {
		AuthoritiesEntity auth = new AuthoritiesEntity(username,"usuario");		
		UsersEntity u = new UsersEntity(username,nombre,apellidos,userPassword,email,direccion,fecha);
		if(comprobarUsuarioEmail(username, email)) {
			userRepo.save(u);
			authRepo.save(auth);
			return true;
		}
		return false;
		
	}
	public Integer modificarUser(String username, String nombre, String apellidos, String userPassword, String email,
			String direccion, String fecha,String rol) {
		AuthoritiesEntity auth = new AuthoritiesEntity(username,rol);		
		UsersEntity u = new UsersEntity(username,nombre,apellidos,userPassword,email,direccion,fecha);
		userRepo.save(u);
		authRepo.save(auth);
		return 1;
		
	}
	public boolean comprobarUsuarioEmail(String username,String email) {
		
		if(userRepo.comprobarUsername(username)==null || userRepo.comprobarEmail(email)==null) {
			return true;
		}
	
		return false;
		
	}
	//buscar por nombre y email
}
