import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  Ingredients: Array<string>;
  RecipeName: string;
  ImgUrl: string;

  constructor(private navCtrl: NavController, private recipeService: RecipeService) {
    this.Ingredients = new Array<string>();
  }

  ngOnInit() {
  }

  addIngredientRow() {
    this.Ingredients.push('');
  }

  saveIngredient() {
    if (this.RecipeName != null && this.ImgUrl != null && this.Ingredients.length > 0 &&
        !this.isEmptyOrSpaces(this.RecipeName) && !this.isEmptyOrSpaces(this.ImgUrl) ) {
      this.recipeService.addRecipe(this.RecipeName, this.ImgUrl, this.Ingredients);
      this.navCtrl.navigateRoot('/');
    }
  }

  isEmptyOrSpaces(str): boolean {
    return str === null || str.match(/^ *$/) !== null;
  }

  trackByFn(index, item) {
    return index;
  }
}
