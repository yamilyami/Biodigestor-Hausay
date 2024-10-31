
/*import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

import { AceptarTerminosComponent } from './aceptar-terminos/aceptar-terminos.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component'; 

import { QuienessomosComponent } from './QuienesSomos/quienessomos/quienessomos.component';
import path from 'node:path';
/* import { FormulaRegistroComponent } from './registro/formula-registro/formula-registro.component';

//export const routes: Routes = [];*/

// app.routes.ts
import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { AceptarTerminosComponent } from './aceptar-terminos/aceptar-terminos.component';


export const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'aceptar-terminos', component: AceptarTerminosComponent },
  { path: '', redirectTo: '/registro', pathMatch: 'full' }, // Ruta por defecto
];






