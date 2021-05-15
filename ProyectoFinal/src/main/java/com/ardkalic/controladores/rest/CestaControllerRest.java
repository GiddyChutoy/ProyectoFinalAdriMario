package com.ardkalic.controladores.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.ardkalic.dtos.ProductosDto;

@RestController
@RequestMapping(value="/cesta")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class CestaControllerRest {

	
	
	@PostMapping(value="/anadir")
	List<ProductosDto> anadirProducto(@RequestPart(value = "producto",required = false ) ProductosDto producto){
		
		List<ProductosDto> listaProductos = new ArrayList<>() ;
		listaProductos.add(producto);
		return null;
		
	}
}
