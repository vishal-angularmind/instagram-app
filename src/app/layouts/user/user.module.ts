import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutes } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { UserComponent } from './user.component';
import { RegisterComponent } from 'src/app/user/register/register.component';
import { LoginComponent } from 'src/app/user/login/login.component';
import { OtpComponent } from 'src/app/user/otp/otp.component';
import { SetPasswordComponent } from 'src/app/user/set-password/set-password.component';
import { ProfileComponent } from 'src/app/user/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
    RegisterComponent,
    LoginComponent,
    OtpComponent,
    SetPasswordComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
})
export class UserModule { }
