package com.ardkalic.dtos;

public class TarjetaGrafica {
	private Integer id;
	private String nombre;
	private String descripcion;
	private int cantidad;
	private Double precio;
	
	
	
	
	public TarjetaGrafica() {
		super();
	}




	public TarjetaGrafica( String nombre, String descripcion, int cantidad, Double precio) {
		super();
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.cantidad = cantidad;
		this.precio = precio;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}




	public String getDescripcion() {
		return descripcion;
	}




	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}




	public int getCantidad() {
		return cantidad;
	}




	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}




	public Double getPrecio() {
		return precio;
	}




	public void setPrecio(Double precio) {
		this.precio = precio;
	}
	
	
	
}
