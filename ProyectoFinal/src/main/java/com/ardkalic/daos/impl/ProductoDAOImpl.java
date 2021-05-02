package com.ardkalic.daos.impl;

import java.util.Base64;
import java.util.Iterator;
import java.util.List;

import org.hibernate.engine.jdbc.ReaderInputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ardkalic.daos.productoDAO;
import com.ardkalic.dtos.ProductosDto;
import com.ardkalic.repositories.ProductoRepository;


@Service
public class ProductoDAOImpl implements productoDAO {
	
	@Autowired
	private ProductoRepository productoRepo;

	@Override
	public List<ProductosDto> obtenerTodoRatones() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
//	@Override
//	public List<ProductosDto> obtenerTodoRatones(){
//		List<ProductosDto> listaRatones = productoRepo.obtenerRatones() ;
//		return listaRatones;
//		
//	}
}
