import { Component, inject } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

interface SignupForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [DefaultLoginLayout, ReactiveFormsModule, CommonModule, PrimaryInput],
  providers: [LoginService],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class SignUp {
  signupForm!: FormGroup<SignupForm>;
  loginErrorMessage: string = '';
  showPassword: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  private readonly _router = inject(Router);

  submit() {
    this.loginService
      .signup(
        this.signupForm.value.name,
        this.signupForm.value.email,
        this.signupForm.value.password
      )
      .subscribe({
        next: () => {
          this.loginErrorMessage = '';
          this.toastService.success('Login feito com sucesso!');
          this._router.navigate(['/home']);
        },
        error: (error) => {
          this.toastService.error('Erro inesperado, tente novamente mais tarde');
          console.log(error);
          this.loginErrorMessage = error.error.message;
        },
      });
  }

  navigate() {
    this.router.navigate(['login']);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
