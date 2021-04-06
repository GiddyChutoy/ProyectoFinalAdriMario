package com.ardkalic.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ardkalic.entidades.AuthoritiesEntity;

public interface AuthorityRepository extends CrudRepository<AuthoritiesEntity, Integer> {

}
