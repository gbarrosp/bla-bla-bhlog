import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { HomeView, SignUpView } from 'app/shared/utils/views.utils';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
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
    this.authService.login(formData.username, formData.password).subscribe((res) => {
      if (res) {
        this.router.navigate([`/${HomeView.url}`])
      }
    })
  }

  goToSignUp(){
    this.router.navigate([`/${SignUpView.url}`])
  }
}
