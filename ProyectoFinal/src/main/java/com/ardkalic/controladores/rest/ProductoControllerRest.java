package com.ardkalic.controladores.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;


import com.ardkalic.daos.productoDAO;
import com.ardkalic.dtos.ProductosDto;
import com.ardkalic.repositories.ProductoRepository;

@RestController
@RequestMapping(value="/productos")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class ProductoControllerRest {
	
	@Autowired
	private ProductoRepository productorepository;
	@Autowired
	private productoDAO producto;
	
	
	@GetMapping(value="/ratones")
	public List<ProductosDto> obtenerRatones(){
		return producto.obtenerTodoRatones();
	}
	@GetMapping(value="/teclados")
	public List<ProductosDto> obtenerTeclados(){
		return productorepository.obtenerTeclados();
	}
	@GetMapping(value="/graficas")
	public List<ProductosDto> obtenerGraficas(){
		return productorepository.obtenerGraficas();
	}
}
