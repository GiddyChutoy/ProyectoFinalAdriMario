package com.ardkalic.controladores.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ardkalic.entidades.CategoriaEntity;
import com.ardkalic.repositories.CategoriaRepository;

@RestController
@RequestMapping(value="/categorias")
@CrossOrigin(origins = "*")
public class CategoriaControllerRest {
	
	@Autowired
	private CategoriaRepository categoriarepository;
	
	
	@GetMapping(value="")
	public Iterable<CategoriaEntity> obtenerMarcas(){
		return categoriarepository.findAll();
	}
	
}
