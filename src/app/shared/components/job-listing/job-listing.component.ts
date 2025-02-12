import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListing } from '../../utils/data';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-listing',
  imports: [CommonModule, RouterModule, TruncatePipe],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.css',
})
export class JobListingComponent {
  @Input() singleJobListing!: JobListing;
  showFullDescription: boolean = false;

  toggleShowFullDescription = (): void => {
    console.log('toggling');
    this.showFullDescription = !this.showFullDescription;
  };
}
