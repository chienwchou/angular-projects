import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanColounCardComponent } from './kanban-board/kanban-coloun-card/kanban-coloun-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ModalComponent } from './layout/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KanbanBoardComponent,
    KanbanColounCardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
