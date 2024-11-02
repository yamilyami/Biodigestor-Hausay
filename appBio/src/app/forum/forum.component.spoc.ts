import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ForumComponent } from './forum.component';
import { CommonModule } from '@angular/common';

describe('ForumComponent', () => {
  let component: ForumComponent;
  let fixture: ComponentFixture<ForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumComponent],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty formulario initially', () => {
    expect(component.formulario.valid).toBeFalse();
    expect(component.formulario.get('titulo')?.value).toBe('');
    expect(component.formulario.get('pregunta')?.value).toBe('');
  });

  it('should add a question when enviarPregunta is called', () => {
    component.formulario.setValue({ titulo: 'Test Title', pregunta: 'Test Question' });
    component.enviarPregunta();
    expect(component.preguntas.length).toBe(1);
    expect(component.preguntas[0].titulo).toBe('Test Title');
    expect(component.preguntas[0].pregunta).toBe('Test Question');
  });

  it('should add a response when enviarRespuesta is called', () => {
    const pregunta = { titulo: 'Test', pregunta: 'Test', respuestas: [] };
    component.preguntas.push(pregunta);
    component.formularioRespuesta.setValue({ respuesta: 'Test Answer' });
    component.enviarRespuesta(pregunta);
    expect(pregunta.respuestas.length).toBe(1);
    expect(pregunta.respuestas[0]).toBe('Test Answer');
  });
});
