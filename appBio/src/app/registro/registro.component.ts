import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-registro',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    usuario = {
        nombre: '',
        email: '',
        contrasena: ''
    };

    onSubmit() {
        console.log('Registro exitoso:', this.usuario);
    }
}





