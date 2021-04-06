package com.ardkalic.controladores.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ardkalic.dtos.TarjetaGrafica;
import com.ardkalic.dtos.Ratones;
import com.ardkalic.dtos.Teclados;
import com.ardkalic.repositories.ProductoRepository;

@RestController
@RequestMapping(value="/v1")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class ProductoControllerRest {
	
	@Autowired
	private ProductoRepository productorepository;
	
	@GetMapping(value="/productos/ratones")
	public List<Ratones> obtenerRatones(){
		return productorepository.obtenerRatones();
	}
	@GetMapping(value="/productos/teclados")
	public List<Teclados> obtenerTeclados(){
		return productorepository.obtenerTeclados();
	}
	@GetMapping(value="/productos/graficas")
	public List<TarjetaGrafica> obtenerGraficas(){
		return productorepository.obtenerGraficas();
	}
}
