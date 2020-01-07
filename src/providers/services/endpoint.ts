import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class EndpointProvider {
    constructor(private http: HttpClient, private router: Router) { }

    private readonly apiVersion = '1.0.0';
    private readonly appVersion = '1.0.0';
    private readonly apiUrl = '';

    // tslint:disable-next-line:variable-name
    private readonly _sendPushNotification: string = 'PushNotifications/SendNotificationToTopic';

    private get sendPushNotificationUrl() {
        return this.apiUrl + this._sendPushNotification;
    }

    // tslint:disable-next-line:variable-name
    sendPushNotification<T>(postData: any, access_token: any): Observable<T> {
        const endpointUrl = this.sendPushNotificationUrl;
        console.log('Data in endPoint notification push: ', postData);
        return this.http.post<T>(endpointUrl, postData, this.getRequestHeaders(access_token));
    }

    // tslint:disable-next-line:variable-name
    getRequestHeaders(access_token: any): {
        headers: HttpHeaders | {
            [header: string]: string | string[]
        }
    } {

        if (new Date(access_token.Expires) > new Date()) {
            const headers = new HttpHeaders({
                Authorization: 'Bearer ' + access_token.token,
                'Content-Type': 'application/json'
            });
            return { headers };
        } else {
            this.router.navigate(['/login']);
        }
    }
}