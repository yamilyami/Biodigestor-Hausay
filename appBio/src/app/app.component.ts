import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { NadvarComponent } from './shared/nadvar/nadvar.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegistroComponent } from "./registro/registro.component";
import { AceptarTerminosComponent } from "./aceptar-terminos/aceptar-terminos.component";
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { DashBoardComponent } from './Dash/dash-board/dash-board.component';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NadvarComponent, HomePageComponent, 
            FooterComponent, LoginComponent, RestablecerContrasenaComponent, 
            RegistroComponent, ReactiveFormsModule, DashBoardComponent, AceptarTerminosComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['assets/css/style.css']
})
  
export class AppComponent {
  title = 'appBio';
}

