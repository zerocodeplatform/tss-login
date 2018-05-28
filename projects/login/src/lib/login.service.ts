import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor() { }
  //To store session user data.
  sessionUserData: any;

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
  validate(userName, password,data) {
    this.sessionUserData = JSON.parse(sessionStorage.getItem("userData"));
    if (userName == this.sessionUserData[0].userName
      && password == this.sessionUserData[0].password) {
      alert(data.name+" Logged in successfully");
    } else {
      alert("Invalid credentials");
    }
  }
}
