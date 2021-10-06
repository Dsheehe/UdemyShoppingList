import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() chosen = new EventEmitter<void>();

  sendUp() {
    // this.chosen.emit();

    this.recipeService.recipeSelected.emit(this.recipe)
   
  }

  constructor(private recipeService: RecipeService ) { }

  ngOnInit(): void {
  }

}
