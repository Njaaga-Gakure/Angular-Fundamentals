import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { JobListing, jobs } from '../../shared/utils/data';

@Component({
  selector: 'app-single-job',
  imports: [RouterModule],
  templateUrl: './single-job.component.html',
  styleUrl: './single-job.component.css',
})
export class SingleJobComponent implements OnInit {
  job!: JobListing;
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    const jobId: string = this.route.snapshot.paramMap.get('id') as string;
    const singleJob = jobs.find((job) => job.id === jobId);
    if (singleJob) {
      this.job = singleJob;
    }
  }
  deleteJob(id: string): void {
    console.log(`job ewith id: ${id} has been deleted`);
  }
}
