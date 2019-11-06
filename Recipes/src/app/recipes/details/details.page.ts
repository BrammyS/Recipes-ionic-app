import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  recipe: {
    index: number,
    name: string,
    imgUrl: string,
    ingredients: Array<string>
  };

  constructor(private route: ActivatedRoute, public alertController: AlertController,
              private recipeService: RecipeService, private navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.recipe = JSON.parse(params.special);
      }
    });
   }

   async removeItem(index) {
    const alert = await this.alertController.create({
      header: 'Please confirm',
      message: 'Do you want to remove ' + this.recipe.name + ' from the list?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Confirm',
          handler: () => {
            this.recipeService.removeRecipe(index);
            this.navCtrl.navigateRoot('/');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }
}
