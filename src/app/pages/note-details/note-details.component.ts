import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  detailsForm = this.fb.group({
    'title' : [null,Validators.required],
    'body' : [null, Validators.required]
  });
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.detailsForm.value);
  }
}
