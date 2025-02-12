import { Routes } from '@angular/router';
import {
  HomeComponent,
  JobsComponent,
  SingleJobComponent,
  AddJobComponent,
  EditJobComponent,
  NotFoundComponent,
} from './features';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'jobs/add', component: AddJobComponent },
  { path: 'jobs/:id', component: SingleJobComponent },
  { path: 'jobs/edit/:id', component: EditJobComponent },
  { path: '**', component: NotFoundComponent },
];
