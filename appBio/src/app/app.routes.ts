import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { AceptarTerminosComponent } from './aceptar-terminos/aceptar-terminos.component';
import { Registro01Component } from './registro01/registro01/registro01.component';
import { QuienesSOmos01Component } from './QuienesSomos/quienes-somos01/quienes-somos01.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { HistorialDePagosComponent } from './historialDePagos/historialDePagos.component'; // Ruta relativa correcta
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent }, // Ruta por defecto
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aceptar-terminos', component: AceptarTerminosComponent },
  { path: 'formulario', component: Registro01Component },
  { path: 'somos', component: QuienesSOmos01Component },
  { path: 'historialDePagos', component: HistorialDePagosComponent }
];



