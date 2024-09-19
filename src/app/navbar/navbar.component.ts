import { Component } from '@angular/core';
import { UseraccountService } from '../customservices/useraccount.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username='';
   constructor(public account:UseraccountService, private cookie:CookieService){
    this.username = this.cookie.get('admin');
    console.log('usname',this.cookie.get('admin'));
    
   }
   logout(){
    this.cookie.delete('user');
   this.username="";
   this.account.loginFlag=false;
   window.alert("logged out successfully.....");
    
   }
}
