import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  // @Output() recipeClicked = new EventEmitter<Recipe>();


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
