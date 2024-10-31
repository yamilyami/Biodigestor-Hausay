import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Pregunta {
  titulo: string;
  pregunta: string;
  respuestas: string[];
}

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  formulario: FormGroup;
  formularioRespuesta: FormGroup;
  preguntas: Pregunta[] = [];

  constructor(private fb: FormBuilder) {
    // Inicializamos los formularios
    this.formulario = this.fb.group({
      titulo: ['', Validators.required],
      pregunta: ['', Validators.required]
    });

    this.formularioRespuesta = this.fb.group({
      respuesta: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  enviarPregunta() {
    if (this.formulario.valid) {
      const nuevaPregunta: Pregunta = {
        titulo: this.formulario.get('titulo')?.value || '',
        pregunta: this.formulario.get('pregunta')?.value || '',
        respuestas: []
      };
      this.preguntas.push(nuevaPregunta);
      this.formulario.reset();
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  enviarRespuesta(pregunta: Pregunta) {
    if (this.formularioRespuesta.valid) {
      const respuesta = this.formularioRespuesta.get('respuesta')?.value || '';
      pregunta.respuestas.push(respuesta);
      this.formularioRespuesta.reset();
    } else {
      alert('Por favor, ingrese una respuesta.');
    }
  }
}
