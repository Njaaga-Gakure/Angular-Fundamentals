import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Link {
  path: string;
  label: string;
}

interface Card {
  id: number;
  title: string;
  subTitle: string;
  link: Link;
  isAccent: boolean;
}

@Component({
  selector: 'app-home-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
})
export class HomeCardComponent {
  @Input() card!: Card;
}
