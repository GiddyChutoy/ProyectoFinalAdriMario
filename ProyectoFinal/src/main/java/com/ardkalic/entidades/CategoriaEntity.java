package com.ardkalic.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="categorias")
public class CategoriaEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_categoria")
	private int id_categoria;
	
	@Column(name="tipo")
	private String tipo;

	
	public CategoriaEntity() {
		super();
	}
	

	public CategoriaEntity(int id_categoria, String tipo) {
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
