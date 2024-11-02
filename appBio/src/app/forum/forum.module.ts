import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ForumComponent } from './forum.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ForumComponent], 
  imports: [
    CommonModule,
    ReactiveFormsModule
   
  ],
  exports: [ForumComponent] 
})
export class ForumModule { }
