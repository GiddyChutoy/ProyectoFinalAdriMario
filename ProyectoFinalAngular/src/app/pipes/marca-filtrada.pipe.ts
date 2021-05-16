import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marcaFiltrada'
})
export class MarcaFiltradaPipe implements PipeTransform {

  transform(value: any, marcaFiltrada: string, marcaProducto: string): any {
    
    const marcasResultantes = [];

    for(const marca of value) {
      if (marcaFiltrada === "Todas las marcas") {
        marcasResultantes.push(marca)
      } else if (marca[marcaProducto] === marcaFiltrada) {
        marcasResultantes.push(marca)
      }
    }

    return marcasResultantes;
  }

}
