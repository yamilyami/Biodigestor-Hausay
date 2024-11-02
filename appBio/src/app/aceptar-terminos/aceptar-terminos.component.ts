import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-aceptar-terminos',
  standalone: true,
  imports: [FormsModule], // Agrega FormsModule aquí
  templateUrl: './aceptar-terminos.component.html',
  styleUrls: ['./aceptar-terminos.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class AceptarTerminosComponent {
  
  constructor(private router: Router) {} // Inyección del Router

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    // Lógica a ejecutar al enviar el formulario
    console.log('Formulario enviado');
  }

  // Método para volver a la página anterior
  volverAtras(): void {
    this.router.navigate(['../']); // Cambia '../' por la ruta correcta si es necesario
    // O puedes usar window.history.back(); para regresar a la página anterior
  }
}

