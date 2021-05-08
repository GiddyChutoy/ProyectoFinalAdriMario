package com.ardkalic.dtos;

public class MarcaDto {
	
	private int id_marca;
	private String marca;
	
	
	
	public MarcaDto() {
		super();
	}

	


	public MarcaDto(String marca) {
		super();
		this.marca = marca;
	}




	public MarcaDto(int id_marca, String marca) {
		super();
		this.id_marca = id_marca;
		this.marca = marca;
	}



	public int getId_marca() {
		return id_marca;
	}



	public void setId_marca(int id_marca) {
		this.id_marca = id_marca;
	}



	public String getMarca() {
		return marca;
	}



	public void setMarca(String marca) {
		this.marca = marca;
	}
	
	
	
	
}
