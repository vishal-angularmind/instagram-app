import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private http : HttpService,
    private _route: Router,
    private toastr : ToastrService) { }

  registerForm!: FormGroup;
  ngOnInit(): void {
    this.addRegisterForm();
  }

  addRegisterForm(){
    this.registerForm = this.fb.group({
      email : ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.registerForm.invalid){
      this.toastr.error("please enter an email");
      return
    }

    console.log(this.registerForm.value)
    this.http.post('register', this.registerForm.value).subscribe({
      next : (res) => {
        console.log(res)
        this._route.navigate(['otp-confirmation']);
        this.toastr.success('registered successfully');
      },
      error : (error) => {
        console.error(error)
        
        this.toastr.error(error.error.message);
      }

    })
    
  }
}
