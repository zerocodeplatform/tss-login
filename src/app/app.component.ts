import { Component } from '@angular/core';
import { LoginService } from 'projects/login/src/public_api';
import { LoginProperties } from 'dist/login/lib/login-properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options:LoginProperties;
  title = 'app';
  constructor(private logServ:LoginService){
    this.options={
      name:'',
      displayName:'vricky',
      logo:'vik.txt',
      dataset:''
    }
  }
}
