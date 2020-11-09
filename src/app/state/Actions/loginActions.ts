import { Action } from '@ngrx/store';
import { LoginTypes } from '../types';

export class LoginAction implements Action{
  readonly type = LoginTypes.LOGIN;
  constructor(readonly payload:any){}
}

export class LoginSuccessAction implements Action{
    readonly type = LoginTypes.LOGIN_SUCCESS;
    constructor(readonly payload:any){}
  }

  export class LoginErrorAction implements Action{
    readonly type = LoginTypes.LOGIN_ERROR;
    constructor(readonly payload:any){}
  }