import { Component, OnInit } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Category } from "../../models/caterory-model";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
})
export class CategoriesComponent implements OnInit {
  faPlus = faPlus;
  newCategoryName = "";
  categories: Category[] = [{ name: "Dom" }, { name: "Rodzina" }];

  constructor() {}

  ngOnInit(): void {}

  addCategory() {
    this.categories.push({ name: this.newCategoryName });
    this.newCategoryName = "";
  }
}
