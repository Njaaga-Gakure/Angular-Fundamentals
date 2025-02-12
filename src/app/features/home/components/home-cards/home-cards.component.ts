import { Component } from '@angular/core';
import { HomeCardComponent } from '../home-card/home-card.component';
import { CommonModule } from '@angular/common';
import { homeCards, Card } from '../../../../shared/utils/data';

@Component({
  selector: 'app-home-cards',
  imports: [CommonModule, HomeCardComponent],
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css',
})
export class HomeCardsComponent {
  cards: Card[] = homeCards;
}
