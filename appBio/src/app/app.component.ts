import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NadvarComponent } from './shared/nadvar/nadvar.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegistroComponent } from "./registro/registro.component";
import { AceptarTerminosComponent } from "./aceptar-terminos/aceptar-terminos.component";
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { FormsModule } from '@angular/forms';
import { QuienessomosComponent } from "./QuienesSomos/quienessomos/quienessomos.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum/forum.component';
@Component({
  selector: 'app-root',
  standalone: true,
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
    ForumComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrección aquí
})
export class AppComponent {
  title = 'appBio';
  preguntas: any[] = [];
}