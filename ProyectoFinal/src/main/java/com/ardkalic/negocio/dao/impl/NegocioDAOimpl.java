package com.ardkalic.negocio.dao.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ardkalic.dtos.ProductosDto;
import com.ardkalic.negocioDAO.NegocioDAO;

@Service
public class NegocioDAOimpl implements NegocioDAO {

	@Override
	public Double obtenerPrecioFinal(List<ProductosDto> lista) {
		double precioTotal = 0;
		for (ProductosDto productosDto : lista) {
			precioTotal= ( productosDto.getCantidadProducto() * productosDto.getPrecio() ) + precioTotal; 
		}
		return precioTotal;
	}

}
