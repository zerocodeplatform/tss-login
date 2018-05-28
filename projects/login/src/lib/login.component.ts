import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginProperties, loginPropertiesService } from './login-properties';

@Component({
  selector: 'tss-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  @Input() options: loginPropertiesService;
  loginForm: FormGroup = new FormGroup({});
  user: any = {};
  rememberMe = false;
  btnLabel: string;
  title:string;
  
  /**
   * To store static user data in session storage on load
   * 
   * @param loginServ 
   * @see LoginService
   * @since 25-05-2018
   */
  constructor(private loginServ : LoginService) {
    this.loginServ.userData();
    
  }
  
  /**
   * html related tags to view on load. 
   *  
   * @since 25-05-2018
   */
  ngOnInit() {
   /*  this.btnLabel = this.options.btnLabel || 'Submit';
    this.title = this.options.title || 'Login'; */
    this.user = {}; 
  }

  /**
   * To validate login credentials of the logged in user it will call service method.
   * 
   * @param values 
   * @param valid 
   * @see LoginService
   * @since 25-05-2018
   */
  login(values,valid){
    console.log(this.options);
    if(valid){
      this.loginServ.validate(values.username,values.password, this.options);
    }
  }
}