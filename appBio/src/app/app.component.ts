import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro01Component } from './registro01/registro01/registro01.component';
import { NadvarComponent } from './shared/nadvar/nadvar.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegistroComponent } from "./registro/registro.component";
import { AceptarTerminosComponent } from "./aceptar-terminos/aceptar-terminos.component";
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './Dash/dash-board/dash-board.component';
import { QuienessomosComponent } from "./QuienesSomos/quienessomos/quienessomos.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NadvarComponent, HomePageComponent, 
            FooterComponent, LoginComponent, RestablecerContrasenaComponent, 
            Registro01Component, ReactiveFormsModule,DashBoardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['assets/css/style.css'], 
  imports: [
    RouterOutlet,
    NadvarComponent,
    HomePageComponent,
    FooterComponent,
    RegistroComponent,
    AceptarTerminosComponent,
    QuienessomosComponent,
    LoginComponent,
    RestablecerContrasenaComponent,
    CommonModule // Agregar CommonModule aquí
  ]
})
  
export class AppComponent {
  title = 'appBio';
}

