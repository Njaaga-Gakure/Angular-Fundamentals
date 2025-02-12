import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { HomeCardsComponent } from '../components/home-cards/home-cards.component';
import { JobListingsComponent } from '../../../shared/components/job-listings/job-listings.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, HomeCardsComponent, JobListingsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
