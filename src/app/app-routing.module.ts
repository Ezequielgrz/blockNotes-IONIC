import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { ViewNoteComponent } from './components/view-note/view-note.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { 
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
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
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
