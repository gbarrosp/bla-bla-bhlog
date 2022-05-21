import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginView } from 'app/shared/utils/views.utils';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      name: [null , Validators.required],
      username: [null , Validators.required],
      password: [null , Validators.required],
      passwordMatch: [null , Validators.required],
      cpf: [null , Validators.required],
      gender: [null , Validators.required],
    })
  }

  signUp(){
    // if (this.signUpForm.valid && this.validatePassword()){
    //   this.bindDoctorData()
    //   this.authService.register(this.newDoctor).subscribe(
    //     response => {
    //       if (response){
    //         this.snackbar.open(MessagesEnum.SuccessUserSignUp);
    //         this.router.navigate([Views.patients.url])
    //       }
    //     },
    //     error => {
    //       this.snackbar.open(generalExceptionTreatment(error), 'Fechar')
    //     }
    //   )
    // } else {
    //   this.snackbar.open(MessagesEnum.InvalidForm)
    // }
  }

  validatePassword(){
    // let formData = this.signUpForm.getRawValue()
    // if (formData.password != formData.passwordMatch){
    //   this.snackbar.open(MessagesEnum.PasswordNotMatch)
    //   return false
    // }
    // return true
  }

  bindDoctorData(){
    // let formData = this.signUpForm.getRawValue()
    // this.newDoctor.user.username = formData.username
    // this.newDoctor.user.password = formData.password
    // this.newDoctor.name = formData.name
    // this.newDoctor.cpf = formData.cpf
    // this.newDoctor.gender = formData.gender
  }

  navigateToLogin(){
    this.router.navigate([`/${LoginView.url}`])
  }
}
