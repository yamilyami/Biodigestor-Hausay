import { Component } from '@angular/core';
import { VentanaEmergenteService } from '../servicios/ventana-emergente.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],  // Aquí puedes agregar módulos necesarios si los hay
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Asegúrate de usar 'styleUrls' en lugar de 'styleUrl'
})
export class LoginComponent {
  constructor(public ventanaEmergenteService: VentanaEmergenteService) {}

  abrirVentanaEmergentePassword() {
    this.ventanaEmergenteService.abrirVentanaEmergente();
  }
}

