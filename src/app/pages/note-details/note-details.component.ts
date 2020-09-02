import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NotesService } from 'src/app/shared/notes.service';
import { Notes } from 'src/app/shared/notes';
import { ThrowStmt } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  isEdit: boolean;
  store: Notes[] = [];
  // id: number
  value: Notes;
  constructor(private fb: FormBuilder, private NotesService: NotesService, private router: Router,
    private route: ActivatedRoute) { }

  detailsForm = this.fb.group({
    'title' : [null, Validators.required],
    'body' : [null],
    'id' : [null]
  });
  ngOnInit() {
    this.route.params.subscribe(res => {
      // console.log(res);
      const {id} = res;
      // this.id = res.id;
      this.value = this.NotesService.notes.find(note=>note.id==id);
      if(id){
        console.log("Patching Value");
        this.detailsForm.patchValue({
          title: this.value.title,
          body: this.value.body,
          id: this.value.id
        });
      }

      console.log(this.value);
      console.log(this.NotesService.notes);
    })

  }

  onSubmit(){
    console.log(this.detailsForm.value);
    if(this.detailsForm.get('id').value === null) {
      this.NotesService.add(this.detailsForm.value);
      this.router.navigate(['/']);
      console.log("Add Condition");
    }
    else {
      console.log("Update condition");
     this.NotesService.update(this.detailsForm.value.id, this.detailsForm.value.title, this.detailsForm.value.body);
      this.router.navigate(['/']);
    }
  }

  onClear(){
    this.router.navigate(['/']);
  }

}
