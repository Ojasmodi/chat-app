import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/toPromise';
 import { Observable } from 'rxjs';
 import { CookieService } from 'ngx-cookie-service';
 
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'https://chatapi.edwisor.com';
  constructor(public http: HttpClient, private cookieService: CookieService) { }

  public signupFunction(data): any {
    /*const params = new HttpParams()
      .set('firstname', data.firstName)
      .set('lastName', data.lastName)
      .set('mobile', data.mobile)
      .set('email', data.email)
      .set('password', data.password)
      .set('authToken', data.authToken);*/

   // return this.http.post(`${this.url}/api/v1/users/signup`, params);
   return this.http.post(`${this.url}/api/v1/users/signup?authToken=${data.accessToken}`, data);
  }

  public getUserInfoFromLocalStorage=()=>{
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  public setUserInfoInLocalStorage=(data)=>{
    localStorage.setItem('userInfo',JSON.stringify(data));
  }

  public signinFunction(data): any {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.response);
    return this.http.post(`${this.url}/api/v1/users/login`, params);

  }

  public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken', this.cookieService.get('authtoken'))

    return this.http.post(`${this.url}/api/v1/users/logout`, params);

  } // end logout function

  

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError
}
