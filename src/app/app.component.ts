import { Component } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { AuthenticateService } from './services/authenticate.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public navCtrl: NavController, public authService: AuthenticateService, public loading: LoadingController, private menu: MenuController
  ) {}

  async logout(){
    const loading = await this.loading.create({
      message: 'Logging out...',
    });
    await loading.present();

    this.authService.logout().then(async () => {
      await loading.dismiss();
      await this.menu.close(); 
      this.navCtrl.navigateForward('/');
    }).catch(async (error) => {
      await loading.dismiss();
      console.error('Logout error:', error);
    });
  }
}
