import { Component } from '@angular/core';
import { VentanaEmergenteService } from '../servicios/ventana-emergente.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Asegúrate de usar 'styleUrls' en lugar de 'styleUrl'
})
export class LoginComponent {
  constructor(public ventanaEmergenteService: VentanaEmergenteService, private router: Router) { }

  abrirVentanaEmergentePassword() {
    this.ventanaEmergenteService.abrirVentanaEmergente();
  }

  abrirRegistro() {
    this.router.navigate(['/registro']);
  }
}

