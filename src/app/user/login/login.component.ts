import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder, private http : HttpService, private _route : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.login()
  }
  loginForm! : FormGroup

  login(){
    this.loginForm = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }
  onSubmit(){
    console.log(this.loginForm.value)
    this.http.post('login', this.loginForm.value).subscribe({
      next : (res) => {
        console.log(res)
        this._route.navigate(['my-profile']);
        this.toastr.success('Welcome');
      },
      error : (error) => {
        console.error(error)
       
         this.toastr.error(error.error.message);
      }

    })
  }
}
