import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  constructor(private fb : FormBuilder, private http : HttpService, private _route : Router, private toastr : ToastrService) { }

  setPasswordForm! : FormGroup
  
  ngOnInit(): void {
    this.setPassword();
  }
  
  setPassword(){
    this.setPasswordForm = this.fb.group({
      email : ['', Validators.required],
      Otp : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  onSubmit(){
    console.log(this.setPasswordForm.value)
    this.http.post('activate', this.setPasswordForm.value).subscribe({
      next : (res) => {
        console.log(res)
        this._route.navigate(['login']);
        this.toastr.success('password saved successfully');
      },
      error : (error) => {
        console.error(error)
       
        this.toastr.error(error.error.message);
      }

    })
  }
}
