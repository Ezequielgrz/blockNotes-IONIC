import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent  implements OnInit {
  noteText: string | undefined;


  constructor(private noteService: NoteService, private router: Router) { }

  createNote() {
    if (this.noteText) {
      const newNote = { text: this.noteText, date: new Date(), id: this.noteService.generateUniqueId() };
      this.noteService.addNote(newNote);
      this.noteText = ''; // Limpiar el campo después de crear la nota
    }
  }

  ngOnInit() {}

}
