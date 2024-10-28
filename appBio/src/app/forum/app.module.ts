import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar esto
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent // Declara el componente aquí
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Asegúrate de que esto esté aquí
  ],
  bootstrap: [AppComponent] // O el componente que estés utilizando como bootstrap
})
export class AppModule { }

