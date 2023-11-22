import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewNoteComponent } from './components/view-note/view-note.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent,ViewNoteComponent,NoteListComponent, CreateNoteComponent, ViewNoteComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
