package com.ardkalic.daos;



import org.springframework.web.multipart.MultipartFile;



public interface ProductoDAO {
	

	Integer anadirProducto(String nombre,String descripcion,String tipo,String marca,int cantidad,Double precio,MultipartFile file);
	Integer modificarProducto(int id, String nombre, String descripcion, String tipo, String marca, int cantidad,
			Double precio, MultipartFile file);
   
}