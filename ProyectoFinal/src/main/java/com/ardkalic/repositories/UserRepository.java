package com.ardkalic.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ardkalic.dtos.UserDto;
import com.ardkalic.entidades.UsersEntity;

public interface UserRepository extends CrudRepository<UsersEntity, Integer> {
	@Query(value = "select new com.ardkalic.dtos.UserDto(u.username,u.nombre,u.apellidos,u.userPassword,u.email,u.direccion,u.fecha,a.authority) "
			+ "FROM com.ardkalic.entidades.UsersEntity u join com.ardkalic.entidades.AuthoritiesEntity a on u.username=a.username")
	List<UserDto> obtenerUsuarios();
	
	@Query(value = "select new com.ardkalic.dtos.UserDto(u.username,u.nombre,u.apellidos,u.userPassword,u.email,u.direccion,u.fecha,a.authority) "
			+ "FROM com.ardkalic.entidades.UsersEntity u join com.ardkalic.entidades.AuthoritiesEntity a on u.username=a.username " 
			+ "where u.username like :username") 
	UserDto comprobarUsername(@Param("username") String username);
	
	@Query(value = "select new com.ardkalic.dtos.UserDto(u.username,u.nombre,u.apellidos,u.userPassword,u.email,u.direccion,u.fecha,a.authority) "
			+ "FROM com.ardkalic.entidades.UsersEntity u join com.ardkalic.entidades.AuthoritiesEntity a on u.username=a.username " 
			+ "where u.email like :email") 
	UserDto comprobarEmail(@Param("email") String email);
	@Query(value = "select new com.ardkalic.dtos.UserDto(u.username,u.nombre,u.apellidos,u.userPassword,u.email,u.direccion,u.fecha,a.authority) "
			+ "FROM com.ardkalic.entidades.UsersEntity u join com.ardkalic.entidades.AuthoritiesEntity a on u.username=a.username " 
			+ "where u.username like :username and u.userPassword like :userPassword") 
	UserDto comprobarLogin(@Param("username") String username,@Param("userPassword") String userPassword);
	@Query(value = "select new com.ardkalic.dtos.UserDto(u.username,u.nombre,u.apellidos,u.userPassword,u.email,u.direccion,u.fecha,a.authority) "
			+ "FROM com.ardkalic.entidades.UsersEntity u join com.ardkalic.entidades.AuthoritiesEntity a on u.username=a.username " 
			+ "where u.username like :username") 
	UserDto obtenerUsuario(@Param("username") String username);
	
	@Transactional
	@Modifying
	@Query(value = "delete FROM com.ardkalic.entidades.UsersEntity u  "
			+ "where u.username like concat('%',:username,'%')")
	Integer borrarUsuario(@Param("username") String username);
}
