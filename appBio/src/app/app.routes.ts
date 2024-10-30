import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Registro01Component } from './registro01/registro01/registro01.component';
import { QuienesSOmos01Component } from './QuienesSomos/quienes-somos01/quienes-somos01.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './Dash/dash-board/dash-board.component';
import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { AceptarTerminosComponent } from './aceptar-terminos/aceptar-terminos.component';
import { Registro01Component } from './registro01/registro01/registro01.component';
import { QuienesSOmos01Component } from './QuienesSomos/quienes-somos01/quienes-somos01.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { HistorialDePagosComponent } from './historialDePagos/historialDePagos.component'; // Ruta relativa correcta

// Exportamos las rutas
export const routes: Routes = [
  { path: '', component: HomePageComponent },  // Ruta por defecto
  { path: 'registro', component: Registro01Component },
  { path: 'somos', component: QuienesSOmos01Component },
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashBoardComponent },
  { path: 'historialDePagos', component: HistorialDePagosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura el router
  exports: [RouterModule]
})
export class AppRoutingModule { }
