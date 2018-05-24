import { Component } from '@angular/core';
import { AdminServService } from 'projects/login/src/lib/admin/admin-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private admin : AdminServService){
  this.admin.start();
  }
}
