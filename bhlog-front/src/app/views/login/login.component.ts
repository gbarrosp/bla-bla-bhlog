import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpView } from 'app/shared/utils/views.utils';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: [null , Validators.required],
      password: [null , Validators.required],
    });
  }

  signIn(){
    let formData = this.loginForm.getRawValue()
    // this.authService.login(formData.username, formData.password).subscribe(
    //   (response)=>{
    //     this.router.navigate([Views.patients.url])
    //   },
    //   (error)=>{
    //     console.log(error)
    //   }
    // )
  }

  goToSignUp(){
    this.router.navigate([`/${SignUpView.url}`])
  }
}
