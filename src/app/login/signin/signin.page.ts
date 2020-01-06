import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(
    public nav: NavController,
  ) { }

  ngOnInit() {
  }
  login(){
    const navigationExtras: NavigationOptions = {
      state: {
        
      },
      animated: false
    };
    this.nav.navigateForward('/tabs/seguridad', navigationExtras);
  }
  registro(){
    const navigationExtras: NavigationOptions = {
      state: {
      },
      animated: false
    };
    this.nav.navigateForward('/signup', navigationExtras);
  }
}
