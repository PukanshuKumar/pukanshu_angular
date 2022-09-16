import { Component, OnInit } from '@angular/core';
import { card } from './cards.model';
import { ProjectCardsService } from './project-cards.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  constructor(private cardsService:ProjectCardsService){}

  cards:card[]=[];

  ngOnInit(): void {
      this.cards = this.cardsService.cards
  }
}
