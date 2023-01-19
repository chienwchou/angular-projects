import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  newTaskForm: FormGroup;
  @Input() sectionList: {index: number, title: string}[];
  @Output() formResponse: EventEmitter<{name: string; description: string, section: number}> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.newTaskForm = this.fb.group({
      newTask: ['test',
      [
          Validators.required,
          Validators.minLength(3)
      ]],
      newTaskDescription: [''],
      newTaskSection: [0, [Validators.required]]
    });
  }

  get newTask() {
    return this.newTaskForm.get('newTask');
  }

  onSubmit() {
    this.formResponse.emit({
      name: this.newTaskForm.value.newTask,
      description: this.newTaskForm.value.newTaskDescription,
      section: this.newTaskForm.value.newTaskSection
    });
  }
}
