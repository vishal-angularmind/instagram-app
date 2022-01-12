
import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/user/login/login.component';
import { OtpComponent } from 'src/app/user/otp/otp.component';
import { ProfileComponent } from 'src/app/user/profile/profile.component';
import { RegisterComponent } from 'src/app/user/register/register.component';
import { SetPasswordComponent } from 'src/app/user/set-password/set-password.component';

export const UserRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path:'register',
    component : RegisterComponent
  },
  {
    path: 'otp-confirmation',
    component: OtpComponent
  },
  {
    path: 'set-password',
    component: SetPasswordComponent
  },
  {
    path : 'my-profile',
    component: ProfileComponent
  }
];

