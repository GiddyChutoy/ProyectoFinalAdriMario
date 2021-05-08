package com.ardkalic.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ardkalic.dtos.ProductosDto;

import com.ardkalic.entidades.ProductoEntity;

public interface ProductoRepository extends CrudRepository<ProductoEntity, Integer> {

	@Query(value = "select new com.ardkalic.dtos.ProductosDto (p.id,p.nombre,p.descripcion,c.tipo, m.marca,p.cantidad,p.precio,p.imagen) "
			+ "FROM com.ardkalic.entidades.ProductoEntity p join com.ardkalic.entidades.CategoriaEntity c on p.categorias.id_categoria=c.id_categoria "
			+ "join com.ardkalic.entidades.MarcaEntity m on p.marcas.id_marca=m.id_marca "
			)
	List<ProductosDto> obtenerProductos();
		 
	
	@Query(value = "select new com.ardkalic.dtos.ProductosDto (p.id,p.nombre,p.descripcion,c.tipo, m.marca,p.cantidad,p.precio,p.imagen) "
			+ "FROM com.ardkalic.entidades.ProductoEntity p join com.ardkalic.entidades.CategoriaEntity c on p.categorias.id_categoria=c.id_categoria "
			+ "join com.ardkalic.entidades.MarcaEntity m on p.marcas.id_marca=m.id_marca "
			+ "WHERE p.categorias.tipo like concat('%',:tipo,'%') "
            + "OR p.marcas.marca like concat('%',:tipo,'%')" 
			+ "OR p.nombre like concat('%',:tipo,'%')")
	List<ProductosDto> buscador(@Param("tipo") String tipo);		 
	
	@Query(value = "select new com.ardkalic.dtos.ProductosDto (p.id,p.nombre,p.descripcion,c.tipo, m.marca,p.cantidad,p.precio,p.imagen) "
			+ "FROM com.ardkalic.entidades.ProductoEntity p join com.ardkalic.entidades.CategoriaEntity c on p.categorias.id_categoria=c.id_categoria "
			+ "join com.ardkalic.entidades.MarcaEntity m on p.marcas.id_marca=m.id_marca "
			+ " WHERE p.categorias.tipo like concat('%',:tipo,'%') ")
	List<ProductosDto> obtenerProductosPorTipo(@Param("tipo") String tipo);	
	
	
	@Query(value = "select new com.ardkalic.dtos.ProductosDto (p.id,p.nombre,p.descripcion,c.tipo, m.marca,p.cantidad,p.precio,p.imagen) "
			+ "FROM com.ardkalic.entidades.ProductoEntity p join com.ardkalic.entidades.CategoriaEntity c on p.categorias.id_categoria=c.id_categoria "
			+ "join com.ardkalic.entidades.MarcaEntity m on p.marcas.id_marca=m.id_marca "
			+ " WHERE p.id_producto like concat('%',:id,'%') ")
	List<ProductosDto> obtenerProductosPorId(@Param("id") int id);	
}
