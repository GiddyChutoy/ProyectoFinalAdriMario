package com.ardkalic.dtos;

import java.util.List;

public class ItemDto {
	
	private Integer id;
	private Integer cantidadProducto;
	private Double precio;
	
	public ItemDto() {
		super();
	}
	

	public ItemDto(Integer id, Integer cantidadProducto, Double precio) {
		super();
		this.id = id;
		this.cantidadProducto = cantidadProducto;
		this.precio = precio;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getCantidadProducto() {
		return cantidadProducto;
	}

	public void setCantidadProducto(Integer cantidadProducto) {
		this.cantidadProducto = cantidadProducto;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}
	
	
	
}
