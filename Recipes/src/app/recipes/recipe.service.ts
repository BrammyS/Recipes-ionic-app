import { Injectable, IterableDiffers } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})


export class RecipeService {

  private iterableDiffer: any;
  public recipes : Array<
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
      console.log(data);
      this.recipes = data;
    });
    this.iterableDiffer = this.iterableDiffers.find([]).create(null);



    // this.recipes.push({
    //   name: "Pizza Margherita", 
    //   imgUrl: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--51643_11.jpg?itok=I_hF8vFL", 
    //   ingredients: new Array<string>(
    //     "300g strong bread flour",
    //     "1 tsp instant yeast",
    //     "1 tsp salt",
    //     "1 tbsp olive oil",
    //     "Tomato sauce"
    //     )
    // });
    // this.recipes.push({
    //   name: "Gennaro's classic spaghetti carbonara", 
    //   imgUrl: "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/xtra_med/1558_1_1436795948.jpg?tr=w-400", 
    //   ingredients: new Array<string>(
    //     "3 large free-range egg yolks",
    //     "40 g Parmesan cheese",
    //     "1 x 150 g piece of higher-welfare pancetta",
    //     "200 g dried spaghetti",
    //     "1 clove of garlic",
    //     "extra virgin olive oil"
    //     )
    // });
    // this.storage.set('recipes', this.recipes);
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
