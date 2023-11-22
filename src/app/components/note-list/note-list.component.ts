import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent  implements OnInit {
  notes: any[] | undefined;

  constructor(private noteService: NoteService, private router: Router) { }



  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

  viewNoteDetails(id: string) {
    this.router.navigate(['/view-note', id]);
  }

  deleteNote(id: string) {
    this.noteService.deleteNoteById(id);
  }

  goToCreateNote() {
    this.router.navigate(['/create-note']);
  }

}
