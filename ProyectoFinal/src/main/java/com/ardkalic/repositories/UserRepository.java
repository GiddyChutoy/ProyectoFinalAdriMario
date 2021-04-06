package com.ardkalic.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ardkalic.entidades.UsersEntity;

public interface UserRepository extends CrudRepository<UsersEntity, Integer> {

}
