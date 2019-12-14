import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComponenetGuardsService implements CanActivate {
 
 token;
  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
      this.token = localStorage.getItem("token");
    if(this.token){
          return true;
    }
    else return false; 


}
 
}
