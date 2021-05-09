package com.ardkalic.daos.impl;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Optional;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ardkalic.daos.ProductoDAO;
import com.ardkalic.dtos.ProductosDto;
import com.ardkalic.entidades.CategoriaEntity;
import com.ardkalic.entidades.MarcaEntity;
import com.ardkalic.entidades.ProductoEntity;
import com.ardkalic.repositories.CategoriaRepository;
import com.ardkalic.repositories.MarcaRepository;
import com.ardkalic.repositories.ProductoRepository;


@Service
public class ProductoDAOImpl implements ProductoDAO {
	
	@Autowired
	private ProductoRepository productoRepo;
	@Autowired
	private MarcaRepository marcaRepo;
	@Autowired
	private CategoriaRepository categoriaRepo;

	

	@Override
	public Integer anadirProducto(String nombre,String descripcion,String tipo,String marca,int cantidad,Double precio,MultipartFile file) {
		Integer idMarca= marcaRepo.buscarIdMarca(marca);
		Integer idCategoria= categoriaRepo.buscarIdCategoria(tipo);
		byte[] imagen = null;
		try {
			imagen = file.getBytes();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Optional<MarcaEntity> marcaOp= marcaRepo.findById(idMarca);
		MarcaEntity marcaEn = marcaOp.get();
		Optional<CategoriaEntity> categoriaOp= categoriaRepo.findById(idCategoria);
		CategoriaEntity categoriaEn = categoriaOp.get();
		ProductoEntity p = new ProductoEntity(categoriaEn,marcaEn,nombre,descripcion,cantidad,precio,imagen);
		productoRepo.save(p);
		return 1;
	}
	@Override
	public Integer modificarProducto(int id,String nombre, String descripcion, String tipo, String marca, int cantidad,
			Double precio, byte[] imagen) {
		Integer idMarca= marcaRepo.buscarIdMarca(marca);
		Integer idCategoria= categoriaRepo.buscarIdCategoria(tipo);
		Optional<MarcaEntity> marcaOp= marcaRepo.findById(idMarca);
		MarcaEntity marcaEn = marcaOp.get();
		Optional<CategoriaEntity> categoriaOp= categoriaRepo.findById(idCategoria);
		CategoriaEntity categoriaEn = categoriaOp.get();
		ProductoEntity p = new ProductoEntity(id,categoriaEn,marcaEn,nombre,descripcion,cantidad,precio,imagen);
		productoRepo.save(p);
		return 1;
	}
	@Override
	public void servicioQueHaceLoqueSea(MultipartFile file, ProductosDto producto) {
	
		if(file!=null) {
			try {
				new SerialBlob(file.getBytes());
				file.getOriginalFilename();
			} catch (SerialException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}else {
			
			file=null;
		}
	}
	
}
