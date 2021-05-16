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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;

import com.ardkalic.daos.ProductoDAO;
import com.ardkalic.dtos.ProductosDto;
import com.ardkalic.repositories.ProductoRepository;



@RestController
@RequestMapping(value="/productos")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class ProductoControllerRest {
	
	@Autowired
	private ProductoRepository productorepository;
	@Autowired
	private ProductoDAO productoDao;
	
	@GetMapping(value="/{id_producto}")
	public List<ProductosDto> obtenerProducto(@PathVariable(value="id_producto",required=false)Integer id_producto){
		
		return productorepository.obtenerProductosporId(id_producto);
	}
	
	@GetMapping(value="")
	public List<ProductosDto> obtenerProductos(){
		return productorepository.obtenerTodosProductos();
	}
	@GetMapping(value="/categoria/{tipo}")
	public List<ProductosDto> obtenerProductosTipo(@PathVariable(value = "tipo",required = false ) String tipo ){
		return productorepository.obtenerProductosPorTipo(tipo);
	}
	
	
	@GetMapping(value="/")
	public List<ProductosDto> obtenerProductosBuscador(@RequestParam(value = "tipo",required = false ) String tipo){
		return productorepository.buscador(tipo);
	}
	
	@PostMapping(value="/anadir" )
	public ResponseEntity<String> insertarProductos(@RequestPart(name = "file",required=false) MultipartFile file,

            @RequestPart("request") ProductosDto producto) {
		
		productoDao.anadirProducto(producto.getNombre(),producto.getDescripcion(),producto.getTipo(),producto.getMarca(),
				producto.getCantidad(),producto.getPrecio(),file);

		
		return new ResponseEntity<>("Insercion Correcta", HttpStatus.OK);

	}
	@PutMapping(value="/modificar")
	public ResponseEntity<String> modificarProductos(@RequestPart(name = "file",required=false) MultipartFile file,@RequestPart("request") ProductosDto producto) {
		
		productoDao.modificarProducto(producto.getId(),producto.getNombre(),producto.getDescripcion(),producto.getTipo(),producto.getMarca(),
				producto.getCantidad(),producto.getPrecio(),producto.getImagen(),file);

		return new ResponseEntity<>(HttpStatus.OK);

	}
	@DeleteMapping(value="borrar/{id}")
	public ResponseEntity<String> borrarProductos(@PathVariable(value = "id") Integer id) {
		
		productorepository.deleteById(id);
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	@GetMapping(value="/marca/{marca}")
	public List<ProductosDto> obtenerProductosLogitech(@PathVariable(value = "marca",required = false ) String marca){
		return productorepository.obtenerProductosMarca(marca);
	}
}
