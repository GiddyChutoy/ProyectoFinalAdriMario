package com.ardkalic.controladores.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.ardkalic.daos.ProductoDAO;
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
	private ProductoDAO productoDao;
	
	
	@GetMapping(value="/inicio")
	public Iterable<ProductoEntity> obtenerProductos(){
		return productorepository.findAll();
	}
	@GetMapping(value="/{tipo}")
	public List<ProductosDto> obtenerProductosTipo(@PathVariable(value = "tipo",required = false ) String tipo ){
		return productorepository.obtenerProductosPorTipo(tipo);
	}
	
	@GetMapping(value="/formularioModificador/{id}")
	public List<ProductosDto> obtenerProductosPorID(@PathVariable(value = "id", required = false) int id){
		return productorepository.obtenerProductosPorId(id);
	}
	
	
	@GetMapping(value="/")
	public List<ProductosDto> obtenerProductosBuscador(@RequestParam(value = "tipo",required = false ) String tipo){
		return productorepository.buscador(tipo);
	}
	
	@PostMapping(value="/anadir")
	public ResponseEntity<String> insertarProductos(@RequestBody ProductosDto producto) {
		
		productoDao.anadirProducto(producto.getNombre(),producto.getDescripcion(),producto.getTipo(),producto.getMarca(),
				producto.getCantidad(),producto.getPrecio(),producto.getImagen());

		return new ResponseEntity<>("Insercion Correcta", HttpStatus.OK);

	}
	@PutMapping(value="/modificar")
	public ResponseEntity<String> modificarProductos(@RequestBody ProductosDto producto) {
		
		productoDao.modificarProducto(producto.getId(),producto.getNombre(),producto.getDescripcion(),producto.getTipo(),producto.getMarca(),
				producto.getCantidad(),producto.getPrecio(),producto.getImagen());

		return new ResponseEntity<>("Insercion Correcta", HttpStatus.OK);

	}
	@DeleteMapping(value="/{id}")
	public ResponseEntity<String> borrarProductos(@PathVariable(value = "id",required = false ) Integer id) {
		
		productorepository.deleteById(id);
		
		return new ResponseEntity<>("Borrado Correcta", HttpStatus.OK);
		
	}
}
