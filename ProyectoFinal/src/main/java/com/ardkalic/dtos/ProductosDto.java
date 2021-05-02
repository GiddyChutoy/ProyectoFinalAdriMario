package com.ardkalic.dtos;

public class ProductosDto {
	private Integer id;
	private String nombre;
	private String descripcion;
	private String tipo;
	private String marca;
	private int cantidad;
	private Double precio;
	private byte[] imagen;
	public ProductosDto() {
		super();
	}
	
	public ProductosDto( String nombre, String descripcion, String tipo, String marca, int cantidad,
			Double precio, byte[] imagen) {
		super();
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.tipo = tipo;
		this.marca = marca;
		this.cantidad = cantidad;
		this.precio = precio;
		this.imagen = imagen;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public ProductosDto(String nombre, String descripcion, int cantidad, Double precio) {
		super();
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.cantidad = cantidad;
		this.precio = precio;
	}

	public ProductosDto(Integer id, String nombre, String descripcion, int cantidad, Double precio) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.cantidad = cantidad;
		this.precio = precio;
	}
	public ProductosDto(String nombre, String descripcion, int cantidad, Double precio, byte[] imagen) {
		super();
		
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.cantidad = cantidad;
		this.precio = precio;
		this.imagen = imagen;
	}

	public byte[] getImagen() {
		return imagen;
	}

	public void setImagen(byte[] imagen) {
		this.imagen = imagen;
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
