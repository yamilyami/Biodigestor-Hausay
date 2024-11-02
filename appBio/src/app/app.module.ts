import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { QuienessomosComponent } from './QuienesSomos/quienessomos/quienessomos.component'; // Ruta correcta

// Define las rutas de la aplicación
const routes: Routes = [
  { path: '', redirectTo: '/quienes-somos', pathMatch: 'full' }, // Redirige a Quienes Somos
  { path: 'quienes-somos', component: QuienessomosComponent }, // Ruta para Quienes Somos
  // Puedes agregar otras rutas aquí
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes) // Configura el enrutamiento
  ],
  declarations: [
    QuienessomosComponent // Declara tu componente aquí
  ],
  bootstrap: [/* Aquí va tu componente principal, como AppComponent */] // Aquí debes incluir tu AppComponent si es necesario
})
export class AppModule { }


