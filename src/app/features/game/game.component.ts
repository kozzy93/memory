import { Component, OnInit } from "@angular/core";
import { Card } from "../../models/card-model";
import { CardsService } from "../../services/cards.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  cards: Card[] = [{ word: "", translation: "" }];
  categoryId: number = 0;
  cardIndex: number = 0;
  showTranslation = false;

  constructor(
    private cardsService: CardsService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param => {
      const idString = param.get("id");
      if (idString) {
        const id = Number.parseInt(idString);
        this.categoryId = id;
        this.cardsService
          .getCardsForCategory(id)
          .subscribe(cards => (this.cards = cards));
      }
    });
  }

  actualCard() {
    return this.cards[this.cardIndex];
  }

  reverse() {
    this.showTranslation = true;
  }

  next() {
    if (this.cardIndex < this.cards.length) {
      ++this.cardIndex;
      this.showTranslation = false;
    }
  }
}
