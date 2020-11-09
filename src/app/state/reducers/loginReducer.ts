import { LoginTypes } from '../types';

export const initialLoginState = {
    loginDetails:null
}

export function loginReducer(state:any = initialLoginState, action:any ):any{
    switch(action.type){
        case LoginTypes.LOGIN_SUCCESS:
           return { ...state, loginDetails:action.payload}
        case LoginTypes.LOGIN:
          return { ...state, loginDetails:action.payload}
    }
}