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
@Table(name="productos")
public class ProductoEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_producto")
	private int id_producto;
	
	@OneToOne(cascade=CascadeType.PERSIST,fetch = FetchType.EAGER)
	@JoinColumn(name="id_categoria")
	private CategoriaEntity categorias;
	
	@OneToOne(cascade=CascadeType.PERSIST,fetch = FetchType.EAGER)
	@JoinColumn(name="id_marca")
	private MarcaEntity marcas;

	@Column(name="nombre")
	private String nombre;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@Column(name="cantidad")
	private int cantidad;
	
	@Column(name="precio")
	private Double precio;
	
	@Column(name="imagen")
	private String imagen;

	
	
	
	
	public ProductoEntity() {
		super();
	}
	
	
	

	public ProductoEntity(int id_producto, CategoriaEntity categorias, MarcaEntity marcas, String nombre,
			String descripcion, int cantidad, Double precio, String imagen) {
		super();
		this.id_producto = id_producto;
		this.categorias = categorias;
		this.marcas = marcas;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.cantidad = cantidad;
		this.precio = precio;
		this.imagen = imagen;
	}




	public int getId_producto() {
		return id_producto;
	}

	public void setId_producto(int id_producto) {
		this.id_producto = id_producto;
	}

	public CategoriaEntity getCategorias() {
		return categorias;
	}

	public void setCategorias(CategoriaEntity categorias) {
		this.categorias = categorias;
	}

	public MarcaEntity getMarcas() {
		return marcas;
	}

	public void setMarcas(MarcaEntity marcas) {
		this.marcas = marcas;
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

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	
}
