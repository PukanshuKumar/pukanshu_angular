import { Component, Input, OnInit } from "@angular/core";
import { card } from "../cards.model";
import { ProjectCardsService } from "../project-cards.service";

@Component({
    selector:'app-project-cards',
    templateUrl:'./project-cards.component.html'
})

export class ProjectCardsComponent{
    constructor(private cardsService:ProjectCardsService){}

    @Input() card: any;

  
}