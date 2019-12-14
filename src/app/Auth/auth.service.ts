import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public getToken(): string {
   // console.log("AuthService   ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
    return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
  //  console.log("AuthService   ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
    // return a boolean reflecting 
    // whether or not the token is expired
//return token != null && !this.jwtHelper.isTokenExpired(token);
   // return this.tokenNotExpired(null, token);
   if(token){
     return true;
   }
   else{
     return false;
   }
  }


}
