import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

/*
  Generated class for the RestApiTasseeraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApiTasseeraProvider {

  private apiUrl = 'http://localhost/projetTest/web/app_dev.php/endpoint';

  constructor(public http: HttpClient) {
    console.log('Hello RestApiTasseeraProvider Provider');
  }

  loginUser(data) {
    console.log('****je suis rest****');
    console.log(data);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/login_check', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


}
