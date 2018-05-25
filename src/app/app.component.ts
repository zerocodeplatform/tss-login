import { Component } from '@angular/core';
import { LoginService } from 'projects/login/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private logServ:LoginService){
    //this.logServ.userData();
  }
}
