import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

@Component({
  selector: 'app-aceptar-terminos',
  standalone: true,
  imports: [FormsModule], // Agrega FormsModule aquí
  templateUrl: './aceptar-terminos.component.html',
  styleUrls: ['./aceptar-terminos.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class AceptarTerminosComponent {
  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    // Lógica a ejecutar al enviar el formulario
    console.log('Formulario enviado');
  }
}

