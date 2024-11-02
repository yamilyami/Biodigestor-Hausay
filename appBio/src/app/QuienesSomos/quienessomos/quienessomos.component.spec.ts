import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { QuienessomosComponent } from './quienessomos.component';

describe('QuienessomosComponent', () => {
  let component: QuienessomosComponent;
  let fixture: ComponentFixture<QuienessomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuienessomosComponent], // Debe estar en declaraciones
      imports: [CommonModule] // Asegúrate de incluir cualquier módulo que necesites
    }).compileComponents();

    fixture = TestBed.createComponent(QuienessomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

