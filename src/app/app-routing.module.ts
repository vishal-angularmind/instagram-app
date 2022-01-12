import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './layouts/user/user.component';

const routes: Routes = [
  
  {
    path: '',
    component: UserComponent,
    // canActivateChild: [AuthGuard],
    children: [
     
      {
        path: '',
        loadChildren: () => import('src/app/layouts/user/user.module').then(m => m.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
