import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VentanaEmergenteService } from '../servicios/ventana-emergente.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-restablecer-contrasena',
  standalone: true,

  imports: [CommonModule, FormsModule],
  templateUrl: './restablecer-contrasena.component.html',
 // styleUrls: ['./restablecer-contrasena.component.css']
})
export class RestablecerContrasenaComponent {
  email: string = '';
  password: string = '';
  resetEmail: string = '';
  errorMessage: string = '';

  public isModalOpen: boolean = false;
  constructor(public ventanaEmergenteService: VentanaEmergenteService) {
    // Suscribirse al estado del modal
    this.ventanaEmergenteService.modalState$.subscribe(isOpen => {
      this.isModalOpen = isOpen;
    });
  }

  // Simulación de verificación de correo
  checkEmail() {
    if (this.resetEmail === 'test@example.com') {
      alert('Correo válido. Se ha enviado un enlace de restablecimiento');
      this.resetEmail = '';
      this.ventanaEmergenteService.cerrarVentanaEmergente();  // Cerrar el modal usando el servicio
    } else {
      this.errorMessage = 'Correo no válido';
    }
  }

  // Abrir la ventana modal usando el servicio
  openPasswordResetModal() {
    this.ventanaEmergenteService.abrirVentanaEmergente();
  }

  // Cerrar la ventana modal usando el servicio
  closePasswordResetModal() {
    this.ventanaEmergenteService.cerrarVentanaEmergente();
  }
}
