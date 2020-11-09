import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginSelector } from '../state/slectors/loginSelector';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  providers: [Store]
})
export class WelcomePageComponent implements OnInit {


  constructor(private store: Store<Store>) { }

  user: string ="";

  ngOnInit(): void {

    this.store.select(loginSelector).subscribe(res=>{
      if(res)
        console.log(res);
        this.user = res.loginDetails.email;
    })

  }

}
