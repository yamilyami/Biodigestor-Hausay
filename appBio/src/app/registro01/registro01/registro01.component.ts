
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro01',
  standalone: true,
  imports: [],
  templateUrl: './registro01.component.html',
  styleUrl: './registro01.component.css'
})
export class Registro01Component {

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/ruta-anterior']); // Cambia '/ruta-anterior' por la ruta correcta
    //página anterior del historial window.history.back();
  }
}