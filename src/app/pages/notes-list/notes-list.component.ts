import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/shared/notes.service';
import { Notes } from 'src/app/shared/notes';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})

export class NotesListComponent implements OnInit {

 noteStore: Notes[] = [];
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.noteStore = this.notesService.getAllNotes();
  }

  onAdd(){
    console.log("Add button clicked");
  }
  deleteNote(id) {
    this.notesService.delete(id);
  }
}
