package com.ardkalic.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ardkalic.entidades.MarcaEntity;

public interface MarcaRepository extends CrudRepository<MarcaEntity, Integer>{
	@Query(value = "select (m.id_marca) "
			+ "FROM com.ardkalic.entidades.MarcaEntity m where m.marca like concat('%',:marca,'%')")
	Integer buscarIdMarca(@Param("marca")String marca);
}
