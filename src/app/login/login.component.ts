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

  model: ILogin = {
    userid: window.btoa('admin'),
    password: window.btoa('admin123')
  };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public authService: AuthService) { }

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
    if (this.loginForm.invalid) {
        return;
    } else {
      if (this.f.userid.value === window.atob(this.model.userid) && this.f.password.value === window.atob(this.model.password)) {

        // const ls = new SecureLS({
        //   encodingType: 'rc4',
        //   isCompression: false,
        //   encryptionSecret: 's3cr3t$@1'
        // });
        // ls.set('key-name', {
        //   test: 'secure-ls'
        // });
        // const teste = ls.get('key-name');
        // console.log(teste);

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', window.btoa(this.f.userid.value));
        this.router.navigate([this.returnUrl]);
        console.log(localStorage.getItem('token'));
      } else {
        this.message = 'Dados de login inválidos';
      }
    }
}

}
