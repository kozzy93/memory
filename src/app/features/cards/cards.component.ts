import { Component, OnInit } from "@angular/core";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Category } from "../../models/caterory-model";
import { CategoriesService } from "../../services/categories.service";
import { ActivatedRoute } from "@angular/router";
import { Card } from "../../models/card-model";
import { CardsService } from "../../services/cards.service";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"],
})
export class CardsComponent implements OnInit {
  faTrash = faTrash;
  faPlus = faPlus;

  category: Category = { name: "", id: 0 };
  cards: Card[] = [];
  word = "";
  translation = "";

  constructor(
    private categoryService: CategoriesService,
    private activeRoute: ActivatedRoute,
    private cardsService: CardsService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param => {
      const idString = param.get("id");
      if (idString) {
        const id = Number.parseInt(idString);
        this.categoryService
          .getCategory(id)
          .subscribe(category => (this.category = category));
        this.cardsService
          .getCardsForCategory(id)
          .subscribe(cards => (this.cards = cards));
      }
    });
  }

  addCard() {
    if (this.category.id) {
      this.cardsService
        .addCard(this.category.id, {
          word: this.word,
          translation: this.translation,
        })
        .subscribe(card => {
          this.cards.push(card);
          this.word = "";
          this.translation = "";
        });
    }
  }

  removeCard(card: Card) {
    if (card.id && this.category.id) {
      this.cardsService
        .removeCard(this.category.id, card.id)
        .subscribe(() => this.cards.splice(this.cards.indexOf(card), 1));
    }
  }
}
