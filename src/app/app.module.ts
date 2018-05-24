import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ImgLibModule} from 'tss-img-lib';
import { LoginModule } from 'projects/login/src/public_api';
import { AdminModule } from 'projects/login/src/lib/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ImgLibModule,LoginModule,AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
