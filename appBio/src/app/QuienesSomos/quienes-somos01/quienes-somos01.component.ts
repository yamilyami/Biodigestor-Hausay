import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quienes-somos01',
  standalone: true,
  imports: [],
  templateUrl: './quienes-somos01.component.html',
  styleUrl: './quienes-somos01.component.css'
})
export class QuienesSOmos01Component {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['']);
  }

}
