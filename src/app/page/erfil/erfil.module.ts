import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErfilPageRoutingModule } from './erfil-routing.module';

import { ErfilPage } from './erfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErfilPageRoutingModule
  ],
  declarations: [ErfilPage]
})
export class ErfilPageModule {}
