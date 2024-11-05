import { Component } from '@angular/core';
import { ConsumoComponent } from '../../consumo/consumo.component';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [ConsumoComponent], 
  templateUrl:'./dash-board.component.html',
 //styleUrl: './dash-board.component.css'
 styleUrls: ['../../assets/css/style.css'],
})
export class DashBoardComponent {
}