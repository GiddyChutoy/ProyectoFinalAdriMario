package com.ardkalic.controladores.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ardkalic.dtos.ProductosDto;
import com.ardkalic.negocioDAO.NegocioDAO;

@RestController
@RequestMapping(value="/cesta")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class CestaControllerRest {

	@Autowired
	private NegocioDAO negocioDAO;

	@PostMapping(value="/anadir")
	Double anadirProducto(@RequestBody List<ProductosDto> lista){
		Double precioTotal=negocioDAO.obtenerPrecioFinal(lista) ;	
		return precioTotal;
		
	}
}
