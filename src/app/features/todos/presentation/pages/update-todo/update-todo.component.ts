import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  standalone: true,
  imports: [],
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.scss',
})
export class UpdateTodoComponent {
  route = inject(ActivatedRoute);
  id: string | null = null;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
