import { NgModule } from '@angular/core';// Asegúrate de incluir esta línea
import { RouterModule, Routes } from '@angular/router';
import { Registro01Component } from './registro01/registro01/registro01.component';
import { QuienesSOmos01Component } from './QuienesSomos/quienes-somos01/quienes-somos01.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ForumComponent } from './forum/forum.component';

// Exportamos las rutas
export const routes: Routes = [
  { path: '', component: HomePageComponent },  // Ruta por defecto
  { path: 'homePrincipal', component: HomePageComponent },
  { path: 'formularioRegistro', component: Registro01Component },
  { path: 'registro', component: Registro01Component },
  { path: 'QuienesSomos', component: QuienesSOmos01Component },
  { path: 'ingresar', component: LoginComponent },
  { path: 'inicio', component: HomePageComponent },
  { path: 'forum', component: ForumComponent },
  { path: '**', redirectTo: '' }  // Ruta para redireccionar si no encuentra una ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura el router
  exports: [RouterModule]
})
export class AppRoutingModule { }
