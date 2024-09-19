import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseraccountService {
  loginFlag=false;
  constructor() { }
  login(username:string, password:string){

    if(username==='admin' && password==='admin123'){
      this.loginFlag=true
    }
    else
      this.loginFlag=false;

    return this.loginFlag
  }
  logout(username:string){
    this.loginFlag=false;
  }
}
