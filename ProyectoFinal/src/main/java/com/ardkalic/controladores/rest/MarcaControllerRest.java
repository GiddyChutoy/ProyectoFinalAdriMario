package com.ardkalic.controladores.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ardkalic.dtos.MarcaDto;
import com.ardkalic.entidades.MarcaEntity;
import com.ardkalic.repositories.MarcaRepository;

@RestController
@RequestMapping(value="/marcas")
@CrossOrigin(origins = "*")
public class MarcaControllerRest {

	@Autowired
	private MarcaRepository marcarepository;
	
	@GetMapping(value="")
	public Iterable<MarcaEntity> obtenerMarcas(){
		return marcarepository.findAll();
	}
	
	@PostMapping(value="/anadir")
	public ResponseEntity<String> insertarMarca(@RequestBody MarcaDto marca){
		MarcaEntity m = new MarcaEntity(marca.getMarca());
		marcarepository.save(m);
		return new ResponseEntity<>("Insercion Correcta", HttpStatus.OK);
	}
	
}
