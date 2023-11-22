import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { ViewNoteComponent } from './components/view-note/view-note.component';

const routes: Routes = [
  { 
    path: 'create-note', 
    component: CreateNoteComponent 
  },
  { 
    path: 'note-list', 
    component: NoteListComponent 
  },
  { 
    path: 'view-note/:id', 
    component: ViewNoteComponent 
  },
  { 
    path: '', 
    redirectTo: '/note-list', 
    pathMatch: 'full' 
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
