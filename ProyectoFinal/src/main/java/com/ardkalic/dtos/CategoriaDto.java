package com.ardkalic.dtos;

public class CategoriaDto {
	private int id_categoria;
	private String tipo;
	
	
	
	
	public CategoriaDto() {
		super();
	}




	public CategoriaDto(int id_categoria, String tipo) {
		super();
		this.id_categoria = id_categoria;
		this.tipo = tipo;
	}




	public int getId_categoria() {
		return id_categoria;
	}




	public void setId_categoria(int id_categoria) {
		this.id_categoria = id_categoria;
	}




	public String getTipo() {
		return tipo;
	}




	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
	
	
	
}
