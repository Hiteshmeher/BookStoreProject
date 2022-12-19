import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationModel } from 'src/app/model/bookmodel';
import { BookserviceService } from 'src/app/service/bookservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router :Router,
    private service : BookserviceService) { }

  user : RegistrationModel  = new RegistrationModel("","","","","");

  registerForm = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    address : new FormControl(''),
    password : new FormControl('', Validators.required)
  });
  get email() {
    return this.registerForm.get('email');
  }
  ngOnInit(): void {
  }

  onClickLogin(){
    this.router.navigate([""]);
  }
  onClickRegister(){
    console.log(this.user);
    this.service.userRegistration(this.user).subscribe((data:any)=>{
      // console.log("token is =  "  +data.object);
      localStorage.setItem('token', data.object);
      console.log(localStorage.getItem('token'));
      alert("Registration Successful. Please Log in to your account");
    //  this.router.navigate([""]);
    })
  }

}
