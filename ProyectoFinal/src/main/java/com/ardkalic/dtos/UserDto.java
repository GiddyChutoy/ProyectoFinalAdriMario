package com.ardkalic.dtos;

public class UserDto {
	private String username;
	private String nombre;
	private String apellidos;
	private String userPassword;
	private String email;
	private String direccion;
	private String fecha_nacimiento;
	private String rol;
	
	public UserDto() {
		super();
	}


	public UserDto(String username, String nombre, String apellidos, String userPassword, String email,
			String direccion, String fecha_nacimiento) {
		super();
		this.username = username;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.userPassword = userPassword;
		this.email = email;
		this.direccion = direccion;
		this.fecha_nacimiento = fecha_nacimiento;
	}




	public UserDto(String username, String nombre, String apellidos, String userPassword, String email, String direccion,
		String fecha_nacimiento, String rol) {
	super();
	this.username = username;
	this.nombre = nombre;
	this.apellidos = apellidos;
	this.userPassword = userPassword;
	this.email = email;
	this.direccion = direccion;
	this.fecha_nacimiento = fecha_nacimiento;
	this.rol = rol;
}


	public void setUsername(String username) {
		this.username = username;
	}

	public String getUsername() {
		return username;
	}

	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getApellidos() {
		return apellidos;
	}


	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}


	public String getUserPassword() {
		return this.userPassword;
	}


	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getDireccion() {
		return direccion;
	}


	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}


	public String getFecha_nacimiento() {
		return fecha_nacimiento;
	}


	public void setFecha_nacimiento(String fecha_nacimiento) {
		this.fecha_nacimiento = fecha_nacimiento;
	}


	public String getRol() {
		return rol;
	}


	public void setRol(String rol) {
		this.rol = rol;
	}
	
	
}
