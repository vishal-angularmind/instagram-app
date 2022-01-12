import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutes } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';



@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    HttpClientModule,
  ],
  providers: [HttpService],
})
export class UserModule { }
