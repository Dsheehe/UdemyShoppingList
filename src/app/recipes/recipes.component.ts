import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  // shareDetail(detail: Recipe) {
  //   this.selectedRecipe = detail;

  // }

  constructor(private recipeService: RecipeService) { }

  ngOnInit(){
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {this.selectedRecipe = recipe}
    
    );
  }

}
