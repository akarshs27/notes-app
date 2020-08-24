import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @ViewChild('truncator', {static: false}) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText', {static: false}) bodyText: ElementRef<HTMLElement>;


  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    if(this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      //if there is a text overflow, show the fade out trunacator
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    }
    else {
      //if there is no text overflow, hide the fade out truncator
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

}
