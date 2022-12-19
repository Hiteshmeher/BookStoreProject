import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/model/bookmodel';
import { BookserviceService } from 'src/app/service/bookservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userLogin : LoginModel  = new LoginModel("","");
  loginData : any;

  constructor(
    private router :Router,
    private service : BookserviceService) { }

  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });
  get email() {
    return this.loginForm.get('email');
  }

  ngOnInit(): void {

  }
  onClickLogin(){
    console.log(this.userLogin);
    this.service.loginUser(this.userLogin).subscribe((data:any)=>{
    this.loginData=data.object;
    localStorage.setItem('LoggedUserId', data.object.id);
    console.log(localStorage.getItem('LoggedUserId'));

    if (data.object != null){
    this.router.navigate(["home"]);
    }
    else{
      alert("User doesnot found !!! Check Email and Password again");
    }
    });
  }
  onClickRegister(){
    this.router.navigate(["register"]);
  }
}
