import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    public nav: NavController,
  ) { }

  ngOnInit() {
  }

  logout(){
    const navigationExtras: NavigationOptions = {
      state: {
      },
      animated: false
    };
    this.nav.navigateForward('/signin', navigationExtras);
  }

}
