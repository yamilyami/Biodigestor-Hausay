/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HistorialDePagosComponent } from './historialDePagos.component';
import { PagoService } from '../servicios/pago.service';
import { of } from 'rxjs';

describe('HistorialDePagosComponent', () => {
  let component: HistorialDePagosComponent;
  let fixture: ComponentFixture<HistorialDePagosComponent>;
  let pagoService: PagoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialDePagosComponent],
      imports: [HttpClientTestingModule], // Importa el módulo de pruebas HTTP
      providers: [PagoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialDePagosComponent);
    component = fixture.componentInstance;
    pagoService = TestBed.inject(PagoService); // Inyecta el servicio de pagos
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería obtener el historial de pagos al inicializarse', () => {
    const mockPagos = [
      { id: 1, fecha: '2023-10-01', monto: 100, estado: 'Procesado' },
      { id: 2, fecha: '2023-10-02', monto: 200, estado: 'Pendiente' }
    ];

    spyOn(pagoService, 'obtenerHistorialPagos').and.returnValue(of(mockPagos));

    component.ngOnInit();

    expect(component.pagos.length).toBe(2);
    expect(component.pagos).toEqual(mockPagos);
  });

  it('debería mostrar un error si no se puede obtener el historial de pagos', () => {
    const consoleSpy = spyOn(console, 'error'); // Espía de consola para capturar el error
    spyOn(pagoService, 'obtenerHistorialPagos').and.throwError('Error de red');

    component.ngOnInit();

    expect(consoleSpy).toHaveBeenCalledWith('Error al obtener el historial de pagos', jasmine.any(Error));
  });
});
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialDePagosComponent } from './historialDePagos.component';

describe('HistorialDePagosComponent', () => {
  let component: HistorialDePagosComponent;
  let fixture: ComponentFixture<HistorialDePagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialDePagosComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialDePagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar el historial de pagos simulado al inicializarse', () => {
    component.ngOnInit();
    expect(component.pagos.length).toBe(3);
    expect(component.pagos[0].estado).toBe('Procesado');
  });
});

