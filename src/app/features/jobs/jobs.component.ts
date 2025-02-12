import { Component } from '@angular/core';
import { JobListingsComponent } from '../../shared/components/job-listings/job-listings.component';

@Component({
  selector: 'app-jobs',
  imports: [JobListingsComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent {}
