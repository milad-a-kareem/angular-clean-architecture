import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTodoDialogComponent } from './update-todo-dialog.component';

describe('UpdateTodoDialogComponent', () => {
  let component: UpdateTodoDialogComponent;
  let fixture: ComponentFixture<UpdateTodoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTodoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
