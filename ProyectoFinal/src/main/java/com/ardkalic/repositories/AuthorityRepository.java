package com.ardkalic.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ardkalic.entidades.AuthoritiesEntity;

public interface AuthorityRepository extends CrudRepository<AuthoritiesEntity, Integer> {
	
	@Transactional
	@Modifying
	@Query(value = "delete FROM com.ardkalic.entidades.AuthoritiesEntity a  "
			+ "where a.username like concat('%',:username,'%')")
	Integer borrarAuth(@Param("username") String username);

}
