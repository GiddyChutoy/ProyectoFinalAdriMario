package com.ardkalic.daos;

public interface UserDAO {
	public boolean anadirUser(String username, String nombre, String apellidos, Integer string, String email,
			String direccion, String fecha_nacimiento) ;
	public Integer modificarUser(String username, String nombre, String apellidos, Integer string, String email,
			String direccion, String fecha_nacimiento,String rol) ;
}
