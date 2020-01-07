import { Injectable } from '@angular/core';
import { SessionStorageProvider, DBkeys } from '../providers/providers';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable()
export class AuthService {
    isLoggin: boolean;
    tutorialViewed: boolean;
    constructor(
        private router: Router,
        private sessionDB: SessionStorageProvider, public nav: NavController) {
        this.isLoggin = false;
        this.tutorialViewed = false;
    }

    logout() {
        Promise.all(
            [
                this.sessionDB.remove(DBkeys.ID_TOKEN)
            ]).then(() => {
                this.sessionDB.set(DBkeys.HAS_LOGGED_IN, false);
                this.sessionDB.remove(DBkeys.CURRENT_USER);
                this.nav.navigateRoot('/login');
            });
    }

    hasLoggedIn() {
        Promise.resolve(
            this.sessionDB.get(DBkeys.HAS_LOGGED_IN)
        ).then(value => {
            this.isLoggin = value;
            if (!this.isLoggin) {
                this.nav.navigateRoot('/login');
            }
        });
    }

    async checkHasSeenTutorial() {
        Promise.all(
            [
                this.sessionDB.get(DBkeys.HAS_SEEN_TUTORIAL),
                this.sessionDB.get(DBkeys.HAS_LOGGED_IN),
                this.sessionDB.get(DBkeys.CURRENT_USER)
            ]).then((data) => {
                if (data[0] === true) {
                    if (data[1] === true) {
                        this.nav.navigateRoot('/tabs/seguridad');
                    } else {
                        this.nav.navigateRoot('/signin');
                    }
                } else {
                    this.nav.navigateRoot('/signin');
                }
            });
    }
}
