import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precioMaximoPipe'
})
export class precioMaximoPipe implements PipeTransform {

  transform(value: any, precioMaximo: number, precioProducto: number): any {
    if(value === 0){
      return value;
    }

    const preciosResultantes = [];

    for(const precio of value){
      if (precio[precioProducto] <= precioMaximo) {
        preciosResultantes.push(precio);
      }
    }
    return preciosResultantes;
  }

}
