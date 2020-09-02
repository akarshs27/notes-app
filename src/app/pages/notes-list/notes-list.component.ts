import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/shared/notes.service';
import { Notes } from 'src/app/shared/notes';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [
    trigger('ItemAnim', [
      // entry state
      transition('void => *', [
        style({
          height: 0,
          'margin-bottom': 0,
          padding: 0,
          transform: 'scale(0.85)',
          opacity: 0
        }),
        animate('500ms', style({
          height: '*',
          padding: '*',
          'margin-bottom': '*',
          transform: 'scale(1)'
        })),
        animate(5000)
      ]),
      //  leave state
      transition('* => void', [

        animate(50, style({
          transform: 'scale(1.05'
        })),

        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75
        })),

        animate('120ms ease-out', style({
          transform: 'scale(0.68)',
          opacity: 0
        })),

        animate('150ms ease-out', style({
          height: 0,
          padding: 0,
          'margin-bottom': 0,
        }))
      ])
    ])

  ]
})

export class NotesListComponent implements OnInit {

 noteStore: Notes[] = [];
 filteredStore: Notes[] = [];
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.noteStore = this.notesService.getAllNotes();
    this.filteredStore = this.notesService.getAllNotes();
  }

  onAdd(){
    console.log("Add button clicked");
  }
  deleteNote(id) {
    this.notesService.delete(id);
  }

  search($event) {
    if ($event.target.value === '') {
      this.filteredStore = this.noteStore;
      return;
    }
    this.filteredStore = [];
    const value = new RegExp($event.target.value, 'i');
    // console.log($event);
    for(let note of this.noteStore) {
      if(value.test(note.body) || value.test(note.title)){
        this.filteredStore.push(note);
      }
    }
    console.log(this.filteredStore);
    // console.log(this.noteStore);
  }
}
