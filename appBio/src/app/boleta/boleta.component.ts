import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boleta',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})


export class BoletaComponent {
  boletas = [
    { numero: 1, fecha: '2024-01-15', estado: 'Pagado', archivo: 'boleta_enero.pdf', descripcion: 'Consumo mensual de enero', monto: 45750 },
    { numero: 2, fecha: '2024-02-10', estado: 'Pagado', archivo: 'boleta_febrero.pdf', descripcion: 'Consumo mensual de febrero', monto: 50000 },
    { numero: 3, fecha: '2024-03-05', estado: 'Pagado', archivo: 'boleta_marzo.pdf', descripcion: 'Consumo mensual de marzo', monto: 47300 },
    { numero: 4, fecha: '2024-04-12', estado: 'Pagado', archivo: 'boleta_abril.pdf', descripcion: 'Consumo mensual de abril', monto: 53200 },
    { numero: 5, fecha: '2024-05-08', estado: 'Pagado', archivo: 'boleta_mayo.pdf', descripcion: 'Consumo mensual de mayo', monto: 49000 },
    { numero: 6, fecha: '2024-06-03', estado: 'Pagado', archivo: 'boleta_junio.pdf', descripcion: 'Consumo mensual de junio', monto: 55100 },
    { numero: 7, fecha: '2024-07-02', estado: 'Pagado', archivo: 'boleta_julio.pdf', descripcion: 'Consumo mensual de julio', monto: 51450 },
    { numero: 8, fecha: '2024-08-10', estado: 'Pagado', archivo: 'boleta_agosto.pdf', descripcion: 'Consumo mensual de agosto', monto: 60000 },
    { numero: 9, fecha: '2024-09-14', estado: 'Pagado', archivo: 'boleta_septiembre.pdf', descripcion: 'Consumo mensual de septiembre', monto: 58250 },
    { numero: 10,fecha: '2024-10-05', estado: 'Pendiente', archivo: 'boleta_octubre.pdf', descripcion: 'Consumo mensual de octubre', monto: 62750 }
  ];
  

  descargarBoleta(archivo: string) {
    window.open(archivo, '_blank');
  }
}
