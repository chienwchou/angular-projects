import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../layout/modal/modal.component';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  onOpenModal = false;

  kanbanBoard = [
    {
      id: 1,
      title: 'To Do',
      tasks: [
        {
          'title': 'Task 1',
          'description': 'Task 1 description'
        },
        {
          'title': 'Task 2',
          'description': 'Task 2 description'
        },
      ]
    },
    {
      id: 2,
      title: 'In Progress',
      tasks: [
        {
          'title': 'In Progress 1',
          'description': 'In Progress 1 description'
        },
        {
          'title': 'In Progress 2',
          'description': 'In Progress 2 description'
        },
      ]
    },
    {
      id: 3,
      title: 'Done',
      tasks: [
        {
          'title': 'Done 1',
          'description': 'Done 1 description'
        },
        {
          'title': 'Done 2',
          'description': 'Done 2 description'
        },
      ]
    }
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<{ title: string; description: string; }[]>) {
    if(event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  open() {
		const modalRef = this.modalService.open(ModalComponent);
	}
}
