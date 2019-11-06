import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  constructor(private recipeService: RecipeService, private router: Router) {

  }

  ngOnInit() {
  }

  test(){
    this.recipeService.recipes.forEach(e => {
      console.log(e);
    });
  }

  openDetails(index: number) {
    const recipe = {
      index,
      name: this.recipeService.recipes[index].name,
      imgUrl: this.recipeService.recipes[index].imgUrl,
      ingredients: this.recipeService.recipes[index].ingredients
    };
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(recipe)
      }
    };
    this.router.navigate(['recipes/details'], navigationExtras);
  }
}
