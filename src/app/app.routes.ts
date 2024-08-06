import { Routes, defaultUrlMatcher } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  {
    path: 'todos',
    loadChildren: () =>
      import('./features/todos/presentation/views/todos.module').then((m) => m.TodosModule),
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        './shared/components/page-not-found/page-not-found.component'
      ).then((c) => c.PageNotFoundComponent),
  },
];
