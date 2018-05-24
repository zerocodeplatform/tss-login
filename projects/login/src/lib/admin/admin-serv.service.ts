import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServService {

  constructor() { }
  start(){
    console.log("hi service");
  }
}
