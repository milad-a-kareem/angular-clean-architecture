import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./presentation/pages/todos/todos.component').then(
            (c) => c.TodosComponent
          ),
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './presentation/pages/todo-details/todo-details.component'
              ).then((c) => c.TodoDetailsComponent),
          },
          {
            path: 'update',
            loadComponent: () =>
              import(
                './presentation/pages/update-todo/update-todo.component'
              ).then((c) => c.UpdateTodoComponent),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
