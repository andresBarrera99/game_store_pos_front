import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  constructor() { }
  
  saveParameters(name,values){
    sessionStorage.setItem(name,values);
  }

  getParameters(name){
    sessionStorage.getItem(name);
  }

  doLogout(){
    sessionStorage.clear();
  }

  saveLogin(value){
    this.saveParameters('authenticatedUser',value);
  } 
  
  getUserLogin(){
    return sessionStorage.getItem('authenticatedUser');
  }

  isUserLoggenIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user ===null)
  }
}
