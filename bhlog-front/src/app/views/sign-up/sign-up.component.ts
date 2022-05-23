import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesEnum } from 'app/shared/enums/messages.enum';
import { User } from 'app/shared/models/user.model';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { MessageService } from 'app/shared/services/message.service';
import { HomeView, LoginView } from 'app/shared/utils/views.utils';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
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
    })
  }

  signUp(){
    if (this.signUpForm.valid && this.validatePassword()){
      let formData = this.signUpForm.getRawValue()
      let user = new User()
      user.name = formData.name
      user.username = formData.username
      user.password = formData.password
      this.authService.signUp(user).subscribe(() => {
        this.router.navigate([`/${HomeView.url}`])
      })
    } else {
      this.messageService.showMessage(MessagesEnum.INVALID_FORM)
    }
  }

  validatePassword(){
    let formData = this.signUpForm.getRawValue()
    if (formData.password != formData.passwordMatch){
      this.messageService.showMessage(MessagesEnum.MISMATCH_PASSWORD)
      return false
    }
    return true
  }

  navigateToLogin(){
    this.router.navigate([`/${LoginView.url}`])
  }
}
