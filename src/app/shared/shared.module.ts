import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteCardComponent } from './note-card/note-card.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NoteCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NoteCardComponent
  ]
})
export class SharedModule { }
