import { Component, OnInit } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
})
export class CategoriesComponent implements OnInit {
  faPlus = faPlus;
  catName = "Jakaś kategoria";

  constructor() {}

  ngOnInit(): void {}
}
