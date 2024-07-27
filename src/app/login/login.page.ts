import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { AuthenticateService } from '../services/authenticate.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  isSubmit: Boolean = false;
  isEmail: Boolean = false;

  formData = {
    username: '',
    password: ''
  };

  constructor(private alertController: AlertController, private navCtrl: NavController, private service: LoginService, public authService: AuthenticateService, public loadCtrl: LoadingController,
  ) { }



  ngOnInit() {
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      subHeader: 'Access Denided',
      message: 'fill details carefully, Retry to continue.',
      buttons: ['OK'],
    });

    await alert.present();
  }



  async resetAlert() {
    const alert = await this.alertController.create({
      header: 'Reset',
      subHeader: 'Reset Link sent,',
      message: 'Check your regitered Email ID',
      buttons: ['OK'],
    });

    await alert.present();
  }


  moveTo(path:string){
    this.navCtrl.navigateForward(path);
  }

  onSubmit() {
    // console.log('Form Data:', this.formData);
    // this.navCtrl.navigateForward('dashboard', {
    //   queryParams: {
    //     special : JSON.stringify(this.formData)
    //   }
    // })

    const { username, password } = this.formData;
      console.log("Hitting submit")
      this.service.postData(this.formData).subscribe({
        next:(response:any)=>{
          console.log("reponse value is",response);
          this.navCtrl.navigateForward('tabs/home');
        },
        error:(error:any)=>{
          console.log("error value is",error);
        }
      });
    };

    // if (name === 'admin' && password === 'admin') {
    //   console.log('Login successful:', this.formData);
    //   this.navCtrl.navigateForward('dashboard', {
    //     queryParams: {
    //       text: JSON.stringify(this.formData)
    //     }
    //   });
    // } else {
    //   console.log('Login failed: Invalid username or password', this.formData);
    // }

  

  onReset() {
    this.formData = {
      username: '',
      password: ''
    };
  }
  

  


  async onSubmitUsingAuth() {
    this.isSubmit = true;
    const loading = await this.loadCtrl.create();
    await loading.present();
    
    try {
      if (this.formData && this.formData.username && this.formData.password) {
        const user = await this.authService.login(this.formData.username, this.formData.password);
        
        if (user) {
          
          this.navCtrl.navigateForward('tabs/home');
        } else {
          this.presentAlert()
          console.log('Provide correct details');
        }
      } else {
        console.log('Email and password are required');
      }
    } catch (error) {
      console.log(error);
    } finally {
      loading.dismiss();
    }
  }

  onForget(){
    this.isEmail = true;
    this.authService.resetPassword(this.formData.username).then(() =>{
      console.log('reset link sent');
      this.resetAlert();
    });
  }

}
