import { jobs, JobListing } from './../../utils/data';
import { Component, OnInit, Input } from '@angular/core';
import { JobListingComponent } from '../job-listing/job-listing.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-listings',
  imports: [JobListingComponent, CommonModule],
  templateUrl: './job-listings.component.html',
  styleUrl: './job-listings.component.css',
})
export class JobListingsComponent implements OnInit {
  jobListings: JobListing[] = [];
  @Input() limit?: number;
  @Input() showViewJobs: boolean = false;

  ngOnInit(): void {
    this.jobListings = this.limit ? jobs.slice(0, this.limit) : jobs;
  }
}
