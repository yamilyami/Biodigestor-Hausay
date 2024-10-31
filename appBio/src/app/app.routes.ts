import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './Dash/dash-board/dash-board.component';
import { AceptarTerminosComponent } from './aceptar-terminos/aceptar-terminos.component';
import { QuienesSOmos01Component } from './QuienesSomos/quienes-somos01/quienes-somos01.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { HistorialDePagosComponent } from './historialDePagos/historialDePagos.component'; // Ruta relativa correcta
import { RegistroComponent } from './registro/registro.component';
import { GraficoConsumoComponent } from './grafico-consumo/grafico-consumo.component';

// Exportamos las rutas
export const routes: Routes = [
  { path: '', component: HomePageComponent },  // Ruta por defecto
  { path: 'registro', component: RegistroComponent },
  { path: 'somos', component: QuienesSOmos01Component },
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashBoardComponent },
  { path: 'historialDePagos', component: HistorialDePagosComponent },
  { path: 'aceptar-terminos', component: AceptarTerminosComponent },
  { path: 'grafico-consumo', component: GraficoConsumoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura el router
  exports: [RouterModule]
})
export class AppRoutingModule { }
