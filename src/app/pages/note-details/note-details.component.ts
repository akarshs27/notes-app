import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NotesService } from 'src/app/shared/notes.service';
import { Notes } from 'src/app/shared/notes';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  isEdit: boolean;
   store: Notes[] = [];
  constructor(private fb: FormBuilder, private NotesService: NotesService, private router: Router) { }

  detailsForm = this.fb.group({
    'title' : [null,Validators.required],
    'body' : [null, Validators.required]
  });
  ngOnInit() {
  }

  onSubmit(note: Notes){
    console.log(this.detailsForm.value);
    if(note.id == +"") {
      this.NotesService.add(this.detailsForm.value);
      this.router.navigate(['/']);
      console.log("Add Condition");
    }
    else {
      console.log("Edit condition");
    }
    // this.NotesService.add(this.detailsForm.value);
    // this.router.navigate(['/']);
  }

  onClear(){
    this.router.navigate(['/']);
  }

}
