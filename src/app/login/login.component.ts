import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../login';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: ILogin = { userid: 'admin', password: 'admin123' };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/dashboard';
    this.authService.logout();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  login() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    } else {
      if (this.f.userid.value === this.model.userid && this.f.password.value === this.model.password) {
        console.log('Login successful');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', this.f.userid.value);
        this.router.navigate([this.returnUrl]);
      } else {
        this.message = 'Dados de login inválidos';
      }
    }
}

}
