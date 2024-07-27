import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})


export class ProfilePage implements OnInit {

  user: any;
  userImage: string | null | undefined;
  imageUrl: string | null | undefined;
  userName: string | null | undefined;
  userEmail: string | null | undefined;
  userQualifications: string | null | undefined;
  userDOB: string | null | undefined;
  userBio: string | null | undefined;
  userPhoneNumber: string | null | undefined;

  imageSource : any;
  public isopen:Boolean=false;
  


  constructor(public authService: AuthenticateService) {
    const user = this.authService.getProfile();
  }

  ngOnInit() {
    this.authService.getUser().subscribe(user => {
      if (user) {
        this.user = user;
        this.userName = user.displayName;
        this.userEmail = user.email;
        this.userImage = user.photoURL;
        // Add additional user info if available
      } else {
        this.userImage = 'assets/imgs/avatar.png';
        this.userName = 'Default Name';
        this.userEmail = 'Default Email';
        this.userQualifications = 'N/A';
        this.userDOB = 'N/A';
        this.userBio = 'N/A';
        this.userPhoneNumber = 'N/A';
      }
    });
  }


  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 50,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      this.imageUrl = image.webPath;
    } catch (error) {
      console.error('Camera issue:', error);
    }
  }

  // saveProfile(){

  // }

  // editProfile(){

  // }
}
