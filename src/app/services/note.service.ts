import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: any[] = [];

  getNotes(): any[] {
    return this.notes;
  }

  addNote(note: any) {
    this.notes.push(note);
  }

  getNoteById(id: string): any {
    return this.notes.find((note) => note.id === id);
  }

  deleteNoteById(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }

  public generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  constructor() { }
}
