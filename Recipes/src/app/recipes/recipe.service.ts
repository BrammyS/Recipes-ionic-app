import { Injectable, IterableDiffers } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})


export class RecipeService {

  private iterableDiffer: any;
  public recipes: Array<
    {
      name: string,
      imgUrl: string,
      ingredients: Array<string>
    }>;

  constructor(private storage: Storage, private iterableDiffers: IterableDiffers) {
    this.recipes = new Array<{
      name: string,
      imgUrl: string,
      ingredients: Array<string>
    }>();

    storage.get('recipes').then((data) => {
      if (data == null) {
        data = new Array<{
          name: string,
          imgUrl: string,
          ingredients: Array<string>
        }>();
      }
      this.recipes = data;
    });
    this.iterableDiffer = this.iterableDiffers.find([]).create(null);
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.recipes);
    if (changes) {
      this.storage.set('recipes', this.recipes);
    }
  }

  addRecipe(recipeName: string, img: string, ingredientsAr: Array<string>) {
    this.recipes.push({
      name: recipeName,
      imgUrl: img,
      ingredients: ingredientsAr
    });
    this.storage.set('recipes', this.recipes);
  }

  removeRecipe(index: number) {
    this.recipes.splice(index);
    this.storage.set('recipes', this.recipes);
  }
}
