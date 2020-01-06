import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

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

}
