import { Component } from '@angular/core';
import { VentanaEmergenteService } from '../servicios/ventana-emergente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // importo
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],  // importo ReactiveFormsModule 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;  // formulario reactivo
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder, 
    public ventanaEmergenteService: VentanaEmergenteService
  ) {
    //  mail y password para el validator
    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],  
      password: ['', Validators.required]                  
    });
  }

  abrirVentanaEmergentePassword() {
    this.ventanaEmergenteService.abrirVentanaEmergente();
  }

  // envío del formulario
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido, redirigiendo a DashBoard...');
      this.router.navigate(['dash']);
    } else {
      console.log('Formulario inválido');
      
    }
  }
}