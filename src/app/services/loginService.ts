import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({providedIn:'root'})
export class LoginService{
    constructor(){}

    doLogin(payload){
       return of(payload);
    }
}