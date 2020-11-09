import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map , mergeMap  } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginService } from 'src/app/services/loginService';
import { LoginAction, LoginErrorAction, LoginSuccessAction } from '../Actions/loginActions';
import { LoginTypes } from '../types';
import { Router } from '@angular/router';

@Injectable()
export class loginEffect{
    
    constructor(private action$: Actions, private login:LoginService, private router: Router){}

    submitLogin$ = createEffect(()=>
     this.action$.pipe(ofType<LoginAction>(LoginTypes.LOGIN),

    mergeMap(action =>{
         return this.login.doLogin(action.payload).pipe(map(res =>{
            this.router.navigate(['home']);
                 return new LoginSuccessAction(res);
             }),
             
             catchError(err=> of(new LoginErrorAction(err))
         ))
    } )
))

}