import { Component } from '@angular/core';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SessionStorageProvider, DBkeys } from 'src/providers/providers';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sessionDB: SessionStorageProvider,
    private uniqueDeviceID: UniqueDeviceID,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.uniqueDeviceID.get()
        .then((uuid: any) => {
          this.sessionDB.set(DBkeys.STORED_IMEI_PHONE, uuid);
          console.log
        }
      )
        .catch((error: any) => console.log(error));
    });
  }
}
