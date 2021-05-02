package com.ardkalic.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ardkalic.entidades.CategoriaEntity;

public interface CategoriaRepository extends CrudRepository<CategoriaEntity, Integer> {
	@Query(value = "select c.id_categoria "
			+ "FROM com.ardkalic.entidades.CategoriaEntity c where c.tipo like concat('%',:categoria,'%')")
	Integer buscarIdCategoria(@Param("categoria")String categoria);
}
