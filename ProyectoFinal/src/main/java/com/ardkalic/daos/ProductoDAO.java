package com.ardkalic.daos;

public interface ProductoDAO {
	
	
	Integer anadirProducto(String nombre,String descripcion,String tipo,String marca,int cantidad,Double precio,byte[] imagen);
	Integer modificarProducto(int id, String nombre, String descripcion, String tipo, String marca, int cantidad,
			Double precio, byte[] imagen);
}
