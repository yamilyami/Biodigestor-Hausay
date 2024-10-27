import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'; // Para botones

@Component({
  selector: 'app-historial-de-pagos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule, // Importa el módulo del form-field
    MatInputModule,     // Importa el módulo del input
    MatSelectModule,    // Importa el módulo del select
    MatButtonModule      // Importa el módulo del botón
  ],
  templateUrl: './historialDePagos.component.html',
  styleUrls: ['./historialDePagos.component.css']
})
export class HistorialDePagosComponent {
  // Inicializa las propiedades
  fechaSeleccionada: string = ''; // Inicializa como cadena vacía
  estadoSeleccionado: string = ''; // Inicializa como cadena vacía

  filtrarPagos() {
    // Tu lógica de filtrado aquí
  }

  obtenerTodos() {
    // Tu lógica para mostrar todos los pagos
  }
}
