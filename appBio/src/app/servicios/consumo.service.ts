import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  generateConsumptionData(): any[] {
    const data = [];
    for (let i = 0; i < 30; i++) {
      const fecha = new Date();
      fecha.setDate(fecha.getDate() - i);
      const consumo = Math.floor(Math.random() * 100) + 1;
      data.push({ fecha, consumo });
    }
    return data;
  }

}