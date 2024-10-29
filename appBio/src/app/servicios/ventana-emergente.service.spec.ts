import { TestBed } from '@angular/core/testing';

import { VentanaEmergenteService } from './ventana-emergente.service';

describe('VentanaEmergenteService', () => {
  let service: VentanaEmergenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentanaEmergenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
