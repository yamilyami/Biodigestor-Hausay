import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quienes-somos01',
  templateUrl: './quienes-somos01.component.html',
  styleUrls: ['./quienes-somos01.component.css']
})
export class QuienesSOmos01Component {
  constructor(private location: Location) {}

  volverAtras() {
    this.location.back();
  }
}
