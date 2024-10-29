import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentanaEmergenteService {

  private modalState = new BehaviorSubject<boolean>(false);

  modalState$ = this.modalState.asObservable();

  abrirVentanaEmergente() {
    this.modalState.next(true);
  }

  cerrarVentanaEmergente() {
    this.modalState.next(false);
  }
}
