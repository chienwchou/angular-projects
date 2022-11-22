import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanColounCardComponent } from './kanban-coloun-card.component';

describe('KanbanColounCardComponent', () => {
  let component: KanbanColounCardComponent;
  let fixture: ComponentFixture<KanbanColounCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanColounCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanColounCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
