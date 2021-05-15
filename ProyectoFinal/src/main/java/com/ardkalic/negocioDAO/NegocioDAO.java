package com.ardkalic.negocioDAO;

import java.util.List;

import com.ardkalic.dtos.ItemDto;
import com.ardkalic.dtos.ProductosDto;

public interface NegocioDAO {

	
	Double obtenerPrecioFinal(List<ProductosDto> lista);
}
