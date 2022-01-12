import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private fb: FormBuilder, private http : HttpService, private _route : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.addOtp()
  }
  otpForm! : FormGroup

  addOtp(){
    this.otpForm = this.fb.group({
      Otp : ["",Validators.required]
    })
  }

  onSubmit(){
    // if(this.otpForm.invalid){
    //   return
    // }
    
    console.log(this.otpForm.value)
    this.http.post('confirm', this.otpForm.value).subscribe({
      next : (res) => {
        console.log(res)
        this._route.navigate(['set-password']);
        this.toastr.success('otp confirmed successfully');
      },
      error : (error) => {
        console.error(error)
      
        this.toastr.error(error.error.message);
      }

    })
  }
}
