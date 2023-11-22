import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss'],
})
export class ViewNoteComponent  implements OnInit {
  note: any;

  constructor(private route: ActivatedRoute, private router: Router, private noteService: NoteService) { }

  ngOnInit() {
    const noteId = this.route.snapshot.paramMap.get('id') ?? '';
    this.note = this.noteService.getNoteById(noteId);
  }

  goBack() {
    this.router.navigate(['/note-list']);
  }

}
