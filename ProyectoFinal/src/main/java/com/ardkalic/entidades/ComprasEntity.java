package com.ardkalic.entidades;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity
@Table(name="compras")
public class ComprasEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_compra")
	private int id_compra;
	

	
	@OneToOne(cascade=CascadeType.PERSIST,fetch = FetchType.EAGER)
	@JoinColumn(name="id_producto")
	private ProductoEntity productos;
	
	@OneToOne(cascade=CascadeType.PERSIST,fetch = FetchType.EAGER)
	@JoinColumn(name="username")
	private UsersEntity users;
	
	@Column(name="cantidad")
	private int cantidad;
	
	

	public ComprasEntity() {
		super();
	}



	public ComprasEntity(int id_compra, ProductoEntity productos, UsersEntity users, int cantidad) {
		super();
		this.id_compra = id_compra;
		this.productos = productos;
		this.users = users;
		this.cantidad = cantidad;
	}



	public int getId_compra() {
		return id_compra;
	}



	public void setId_compra(int id_compra) {
		this.id_compra = id_compra;
	}



	public ProductoEntity getProductos() {
		return productos;
	}



	public void setProductos(ProductoEntity productos) {
		this.productos = productos;
	}



	public UsersEntity getUsers() {
		return users;
	}



	public void setUsers(UsersEntity users) {
		this.users = users;
	}



	public int getCantidad() {
		return cantidad;
	}



	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	
	
	
}
