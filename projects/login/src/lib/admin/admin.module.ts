import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompComponent } from './admin-comp/admin-comp.component';
import { AdminServService } from './admin-serv.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminCompComponent],
  exports:[AdminCompComponent],
  providers:[AdminServService]
})
export class AdminModule { }
