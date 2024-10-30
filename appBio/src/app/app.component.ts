import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 69-tk-revisar-el-estilo-visual
import { Registro01Component } from './registro01/registro01/registro01.component';

 develop
import { NadvarComponent } from './shared/nadvar/nadvar.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegistroComponent } from "./registro/registro.component";
import { AceptarTerminosComponent } from "./aceptar-terminos/aceptar-terminos.component";
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
 69-tk-revisar-el-estilo-visual
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './Dash/dash-board/dash-board.component';

import { QuienessomosComponent } from "./QuienesSomos/quienessomos/quienessomos.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common'; // Importar CommonModule
 develop

@Component({
  selector: 'app-root',
  standalone: true,
 69-tk-revisar-el-estilo-visual
  imports: [RouterOutlet, NadvarComponent, HomePageComponent, 
            FooterComponent, LoginComponent, RestablecerContrasenaComponent, 
            Registro01Component, ReactiveFormsModule,DashBoardComponent
          ],
  templateUrl: './app.component.html',
 // styleUrl: './app.component.css'
 styleUrls: ['assets/css/style.css'] 

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
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corregir a styleUrls
 develop
})
export class AppComponent {
  title = 'appBio';
}

