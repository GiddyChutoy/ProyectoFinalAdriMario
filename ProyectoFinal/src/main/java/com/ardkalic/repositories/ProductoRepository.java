package com.ardkalic.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ardkalic.dtos.TarjetaGrafica;
import com.ardkalic.dtos.Ratones;
import com.ardkalic.dtos.Teclados;
import com.ardkalic.entidades.ProductoEntity;

public interface ProductoRepository extends CrudRepository<ProductoEntity, Integer> {

	@Query(value = "select new com.ardkalic.dtos.Ratones (p.nombre,p.descripcion,p.cantidad,p.precio) "
			+ "FROM com.ardkalic.entidades.ProductoEntity p join com.ardkalic.entidades.CategoriaEntity c on p.categorias.id_categoria=c.id_categoria"
			+ " where p.categorias.id_categoria = 1 ")
	List<Ratones> obtenerRatones();
	

	@Query(value = "select new com.ardkalic.dtos.Teclados (p.nombre,p.descripcion,p.cantidad,p.precio) "
			+ "FROM com.ardkalic.entidades.ProductoEntity p join com.ardkalic.entidades.CategoriaEntity c on p.categorias.id_categoria=c.id_categoria"
			+ " where p.categorias.id_categoria = 2 ")
	List<Teclados> obtenerTeclados();		 
	
	@Query(value = "select new com.ardkalic.dtos.TarjetaGrafica (p.nombre,p.descripcion,p.cantidad,p.precio) "
			+ "FROM com.ardkalic.entidades.ProductoEntity p join com.ardkalic.entidades.CategoriaEntity c on p.categorias.id_categoria=c.id_categoria"
			+ " where p.categorias.id_categoria = 5 ")
	List<TarjetaGrafica> obtenerGraficas();		 
	
	
}
