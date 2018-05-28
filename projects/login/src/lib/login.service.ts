import { Injectable } from '@angular/core';
import { loginPropertiesService, LoginProperties } from './login-properties';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements loginPropertiesService{

  constructor() { }
  //To store session user data.
  sessionUserData: any;
getLoginProperties(){
  const loginProp: LoginProperties[] = [
    {
      name: 'secret',
      displayName: 'All of my deepest, darkest secrets.',
      logo: 'lib.txt'
    }
  ];
  return loginProp;
}
/**
   * To set the user in session storage.
   * 
   * @param values 
   * @param valid
   * @since 25-05-2018
   */
  userData() {
    sessionStorage.setItem("userData", JSON.stringify([
      {
        "userName": "vikram",
        "password": "vikram",
      }]));
  }

  /**
   * To validate login credentials of the logged in user.
   * 
   * @param values 
   * @param valid 
   * @since 25-05-2018
   */
  validate(userName, password) {
    this.sessionUserData = JSON.parse(sessionStorage.getItem("userData"));
    if (userName == this.sessionUserData[0].userName
      && password == this.sessionUserData[0].password) {
      alert("Logged in Success");
    } else {
      alert("Invalid credentials");
    }
  }
}
