package com.ardkalic.controladores.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.ardkalic.daos.productoDAO;
import com.ardkalic.dtos.ProductosDto;
import com.ardkalic.entidades.ProductoEntity;
import com.ardkalic.repositories.ProductoRepository;

@RestController
@RequestMapping(value="/productos")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class ProductoControllerRest {
	
	@Autowired
	private ProductoRepository productorepository;
	@Autowired
	private productoDAO producto;
	
	
	@GetMapping(value="/inicio")
	public Iterable<ProductoEntity> obtenerRatones(){
		return productorepository.findAll();
	}
	@GetMapping(value="/{tipo}")
	public List<ProductosDto> obtenerProductosTipo(@PathVariable(value = "tipo",required = false ) String tipo ){
		return productorepository.obtenerProductosPorTipo(tipo);
	}
	
	@GetMapping(value="/")
	public List<ProductosDto> obtenerProductosBuscador(@RequestParam(value = "tipo",required = false ) String tipo,@RequestParam(value="marca",required=false)String marca ){
		return productorepository.buscador(tipo);
	}
}
