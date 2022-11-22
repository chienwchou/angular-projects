import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-coloun-card',
  templateUrl: './kanban-coloun-card.component.html',
  styleUrls: ['./kanban-coloun-card.component.scss']
})
export class KanbanColounCardComponent implements OnInit {
  @Input() task:{ title: string; description: string; } = {
    title: '',
    description: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
}
