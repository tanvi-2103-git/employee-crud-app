import { inject } from "@angular/core";
import { UseraccountService } from "../customservices/useraccount.service";
import { Router } from "@angular/router";

export function authGuard(router:Router){
    const account = inject(UseraccountService);
    if(account.loginFlag){

        return true}
    else{

        window.alert("Please login first....");
        router.navigate(['adminlogin'])
        return false;
    }
}

export function authorizeGuard(){
    const account = inject(UseraccountService);
   
}