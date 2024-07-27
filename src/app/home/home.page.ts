import { Component } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public authService: AuthenticateService,
    private alertController: AlertController
  ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      subHeader: 'Access Denied',
      message: 'Please fill in the details carefully and retry to continue.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async loginWithGoogle() {
    try {
      const user = await this.authService.loginWithGoogle();
      
      if (user) {
        this.navCtrl.navigateForward('tabs/home');
      } else {
        this.presentAlert();
        console.log('Provide correct details');
      }
    } catch (error) {
      this.presentAlert();
      console.error('Login error:', error);
    }
  }
}
