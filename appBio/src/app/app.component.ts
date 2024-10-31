import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro01Component } from './registro01/registro01/registro01.component';

import { NadvarComponent } from './shared/nadvar/nadvar.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from "./login/login.component";
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { DashBoardComponent } from './Dash/dash-board/dash-board.component';
import { BoletaComponent } from './boleta/boleta.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NadvarComponent, HomePageComponent, 
            FooterComponent, LoginComponent, RestablecerContrasenaComponent, 
            Registro01Component, ReactiveFormsModule,
            BoletaComponent
          ],
  templateUrl: './app.component.html',
 // styleUrl: './app.component.css'
 //styleUrls: ['assets/css/style.css'] 

})
export class AppComponent {
  title = 'appBio';
}
