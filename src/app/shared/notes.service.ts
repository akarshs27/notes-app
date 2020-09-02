import { Injectable } from '@angular/core';
import { Notes } from './notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

   notes: Notes[] = [
    // {
    //   title : 'First',
    //   body : 'Body text of the first component',
    //   id : 1
    // },
   ];
  constructor() {
   }

  getAllNotes() {
    return this.notes;
  }

  add(note: Notes) {
    note.id = this.notes.length;
    this.notes.push(note);
  }

  update(id: number, title: string, body: string) {
     const note = this.notes[id];
     note.title = title;
     note.body = body;
  }

  delete(id: number) {
    return this.notes.splice(id, 1);
  }

}
