package com.ardkalic.negocioDAO;

import java.util.List;

import com.ardkalic.dtos.ItemDto;

public interface NegocioDAO {

	
	Double obtenerPrecioFinal(List<ItemDto> lista);
}
