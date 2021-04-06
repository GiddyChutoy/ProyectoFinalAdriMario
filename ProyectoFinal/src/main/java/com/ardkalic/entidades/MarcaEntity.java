package com.ardkalic.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="marcas")
public class MarcaEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_marca")
	private int id_marca;
	
	
	@Column(name="marca")
	private String marca;


	public MarcaEntity() {
		super();
	}


	public MarcaEntity(int id_marca, String marca) {
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
