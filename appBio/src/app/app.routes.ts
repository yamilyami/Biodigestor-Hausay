 69-tk-revisar-el-estilo-visual
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Registro01Component } from './registro01/registro01/registro01.component';
import { QuienesSOmos01Component } from './QuienesSomos/quienes-somos01/quienes-somos01.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './Dash/dash-board/dash-board.component';
=======
import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { AceptarTerminosComponent } from './aceptar-terminos/aceptar-terminos.component';
import { Registro01Component } from './registro01/registro01/registro01.component';
import { QuienesSOmos01Component } from './QuienesSomos/quienes-somos01/quienes-somos01.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { HistorialDePagosComponent } from './historialDePagos/historialDePagos.component'; // Ruta relativa correcta
develop

// Exportamos las rutas
export const routes: Routes = [
 69-tk-revisar-el-estilo-visual
  { path: '', component: HomePageComponent },  // Ruta por defecto
  { path: 'homePrincipal', component: HomePageComponent },
  { path: 'formularioRegistro', component: Registro01Component },
  { path: 'registro', component: Registro01Component },
  { path: 'QuienesSomos', component: QuienesSOmos01Component },
  { path: 'ingresar', component: LoginComponent },
  { path: 'inicio', component: HomePageComponent },
  { path: 'dash', component: DashBoardComponent },
  { path: '**', redirectTo: '' }  // Ruta para redireccionar si no encuentra una ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura el router
  exports: [RouterModule]
})
export class AppRoutingModule { }

=======
  { path: '', component: HomePageComponent }, // Ruta por defecto
  { path: 'registro', component: RegistroComponent },
  { path: 'aceptar-terminos', component: AceptarTerminosComponent },
  { path: 'formulario', component: Registro01Component },
  { path: 'somos', component: QuienesSOmos01Component },
  { path: 'historialDePagos', component: HistorialDePagosComponent } // Agregar la ruta para HistorialDePagosComponent
];

 develop


69-tk-revisar-el-estilo-visual
/*export const routes: Routes = [
  /* {path:"formulario", component:FormulaRegistroComponent} 
];
*/
=======
  develop
