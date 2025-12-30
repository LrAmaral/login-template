import { Component, importProvidersFrom } from '@angular/core';
import { DefaultLoginLayout } from 'src/app/components/default-login-layout/default-login-layout';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login';
import { PrimaryInput } from 'src/app/components/primary-input/primary-input';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

interface LoginForm {
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginLayout, ReactiveFormsModule, CommonModule, PrimaryInput],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  loginForm!: FormGroup<LoginForm>;
  showPassword: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {
        this.toastService.success('Login feito com sucesso!');
        this.router.navigate(['/home']);
      },
      error: (error) => this.toastService.error(error.error?.message || 'Erro inesperado, tente novamente mais tarde'),
    });
  }

  navigate() {
    this.router.navigate(['signup']);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
