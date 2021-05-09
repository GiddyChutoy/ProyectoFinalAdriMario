package com.ardkalic.daos;

import org.springframework.web.multipart.MultipartFile;

import com.ardkalic.dtos.ProductosDto;

public interface ProductoDAO {
	
	
	Integer anadirProducto(String nombre,String descripcion,String tipo,String marca,int cantidad,Double precio,MultipartFile file);
	Integer modificarProducto(int id, String nombre, String descripcion, String tipo, String marca, int cantidad,
			Double precio, byte[] imagen);
	void servicioQueHaceLoqueSea (MultipartFile file, ProductosDto producto);
}
