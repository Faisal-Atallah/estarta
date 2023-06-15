import { Route } from '@angular/router';
import { ListComponent } from './list.component';
import { ListResolver } from './list.resolver';

export const listRoutes: Route[] = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      list: ListResolver
    },
  },
];
