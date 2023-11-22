import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent  implements OnInit {

  noteText: string = '';
  noteTitle: string = '';


  constructor(private noteService: NoteService, private router: Router, private modalService: ModalService) { }

  async createNote() {
    if (this.noteText.trim() !== '' && this.noteTitle.trim() !== '') {
      const newNote = {
        title: this.noteTitle,
        text: this.noteText,
        date: new Date(),
        id: this.noteService.generateUniqueId(),
      };
      this.noteService.addNote(newNote);
      this.noteText = '';
      this.noteTitle = '';
    } else {
      await this.modalService.presentErrorModal('Título y contenido de la nota son obligatorios')
    }
  }


  goToNoteList() {
    this.router.navigate(['/note-list']);
  }

  ngOnInit() {}

}
