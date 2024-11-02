import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Registro01Component } from './registro01/registro01/registro01.component';
import { QuienesSOmos01Component } from './QuienesSomos/quienes-somos01/quienes-somos01.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ForumComponent } from './forum/forum.component';
import { AceptarTerminosComponent } from './aceptar-terminos/aceptar-terminos.component';

export const routes: Routes = [
  { path: 'forum', component: ForumComponent },
  { path: '', component: HomePageComponent },
  { path: 'homePrincipal', component: HomePageComponent },
  { path: 'formularioRegistro', component: Registro01Component },
  { path: 'registro', component: Registro01Component },
  { path: 'QuienesSomos', component: QuienesSOmos01Component },
  { path: 'ingresar', component: LoginComponent },
  { path: 'inicio', component: HomePageComponent },
  { path: 'terminos-y-condiciones', component: AceptarTerminosComponent }, // Asegúrate de usar el nombre correcto
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}