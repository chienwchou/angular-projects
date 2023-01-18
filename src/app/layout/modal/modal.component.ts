import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  newTaskForm: FormGroup;
  @Output() formResponse: EventEmitter<{name: string; description: string}> = new EventEmitter();

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
      newTaskDescription: ['']
    });
  }

  get newTask() {
    return this.newTaskForm.get('newTask');
  }

  onSubmit() {
    this.formResponse.emit({
      name: this.newTaskForm.value.newTask,
      description: this.newTaskForm.value.newTaskDescription
    });
  }
}
