package com.ardkalic.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ardkalic.dtos.ProductosDto;

import com.ardkalic.entidades.ProductoEntity;

public interface ProductoRepository extends CrudRepository<ProductoEntity, Integer> {

	@Query(value = "select new com.ardkalic.dtos.ProductosDto (p.nombre,p.descripcion,p.cantidad,p.precio,p.imagen) "
			+ "FROM com.ardkalic.entidades.ProductoEntity p join com.ardkalic.entidades.CategoriaEntity c on p.categorias.id_categoria=c.id_categoria"
			+ " where p.categorias.id_categoria = 1 ")
	List<ProductosDto> obtenerRatones();
	
	

	@Query(value = "select new com.ardkalic.dtos.ProductosDto (p.nombre,p.descripcion,p.cantidad,p.precio,p.imagen) "
			+ "FROM com.ardkalic.entidades.ProductoEntity p join com.ardkalic.entidades.CategoriaEntity c on p.categorias.id_categoria=c.id_categoria"
			+ " where p.categorias.id_categoria = 2 ")
	List<ProductosDto> obtenerTeclados();		 
	
	@Query(value = "select new com.ardkalic.dtos.ProductosDto (p.nombre,p.descripcion,p.cantidad,p.precio,p.imagen) "
			+ "FROM com.ardkalic.entidades.ProductoEntity p join com.ardkalic.entidades.CategoriaEntity c on p.categorias.id_categoria=c.id_categoria"
			+ " where p.categorias.id_categoria = 5 ")
	List<ProductosDto> obtenerGraficas();		 
	
	
}
