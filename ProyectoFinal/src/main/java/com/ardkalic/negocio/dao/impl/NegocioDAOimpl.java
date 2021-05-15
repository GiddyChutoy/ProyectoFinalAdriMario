package com.ardkalic.negocio.dao.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ardkalic.dtos.ItemDto;
import com.ardkalic.negocioDAO.NegocioDAO;

@Service
public class NegocioDAOimpl implements NegocioDAO {

	@Override
	public Double obtenerPrecioFinal(List<ItemDto> lista) {
		double precioTotal = 0;
		for (ItemDto itemDto : lista) {
			precioTotal = (itemDto.getCantidadProducto() * itemDto.getPrecio()) + precioTotal;
		}
		return precioTotal;
	}

}
