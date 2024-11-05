import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Consumo {
  mes: string;
  volumenGas: number;
}

@Component({
  selector: 'app-consumo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent implements OnInit {
  historialConsumo: Consumo[] = [];
  error: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.cargarHistorialConsumo();
  }

  cargarHistorialConsumo(): void {
    try {
      const datosSimulados: Consumo[] = [
        { mes: 'Enero', volumenGas: 12.5 },
        { mes: 'Febrero', volumenGas: 8.3 },
        { mes: 'Marzo', volumenGas: 15.0 },
        { mes: 'Abril', volumenGas: 10.2 },
        { mes: 'Mayo', volumenGas: 5.5 },
        { mes: 'Junio', volumenGas: 20.7 },
        { mes: 'Julio', volumenGas: 25.0 },
        { mes: 'Agosto', volumenGas: 17.5 },
        { mes: 'Septiembre', volumenGas: 10.3 },
        { mes: 'Octubre', volumenGas: 8.8 },
        { mes: 'Noviembre', volumenGas: 12.2 },
        { mes: 'Diciembre', volumenGas: 16.4 },
      ];

      if (datosSimulados.length === 0) {
        throw new Error('No se encontraron datos de consumo.');
      }

      this.historialConsumo = datosSimulados;
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Ocurrió un error al cargar los datos.';
    }
  }
}