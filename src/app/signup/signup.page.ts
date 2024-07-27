import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { SignupService } from '../services/signup.service';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  isSubmit: Boolean = false;
  formData = {
    username: '',
    email: '',
    gender: '',
    dob: '',
    bio: '',
    qualification: {
      masters: false,
      graduation: false,
      highSchool: false
    },
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    terms: false
  };

  constructor(private navCtrl: NavController, private service: SignupService, public authService: AuthenticateService, public loadCtrl: LoadingController, private alertController: AlertController) { }


  ngOnInit() {
  }

  moveTo(path: string) {
    this.navCtrl.navigateForward(path);
  }

  onReset() {
    this.formData = {
      username: '',
      email: '',
      gender: '',
      dob: '',
      bio: '',
      qualification: {
        masters: false,
        graduation: false,
        highSchool: false
      },
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      terms: false
    };
  }


  onSubmit() {
    console.log("Hitting submit")
    this.service.postData(this.formData).subscribe({
      next: (response: any) => {
        console.log("reponse value is", response);
        this.navCtrl.navigateForward('login');
      },
      error: (error: any) => {
        console.log("error value is", error);
      }
    });

  };


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registration Successful',
      subHeader: 'Account Created',
      message: 'Your account has been successfully registered. Please log in to continue.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async onSubmitUsingAuth() {
    this.isSubmit = true;
    const loading = await this.loadCtrl.create();
    await loading.present();

    try {
      if (this.formData && this.formData.email && this.formData.password) {
        const user = await this.authService.signup(this.formData.email, this.formData.password);

        if (user) {
          this.presentAlert()
          this.navCtrl.navigateForward('login');

        } else {
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


}
