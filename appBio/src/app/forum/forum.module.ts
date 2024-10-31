import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ForumComponent } from './forum.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  
  imports: [
    ReactiveFormsModule,
    ForumComponent,
    CommonModule
    // ... otros imports
  ]
  
})
export class ForumModule { } 