import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = false;
  constructor(public loadingController: LoadingController) { }
  async present(mesage:string) {
    this.isLoading = true;
    return await this.loadingController.create({
      message: mesage,
      duration: 1300000,
      spinner: 'lines'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }
}