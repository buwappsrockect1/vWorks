import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError = false;

  constructor(private fb: FormBuilder,
              private router: Router) {

    // create our form group with all the inputs we will be using in the template
    this.loginForm = this.fb.group({
      username:   ['', Validators.required],
      password:   ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  onSubmit() {

    this.loginError = false;

    if ( this.loginForm.valid ) {


        const userName: string       = this.loginForm.get('username').value ;
        const userPassword: string   = this.loginForm.get('password').value ;

        const userOK: boolean       = userName.trim().toLowerCase() === 'cristina';
        const passwordOK: boolean   = userPassword.trim().toLowerCase() === 'cristina';

        if ( userOK && passwordOK ) {

           // navigates to gestion
           this.router.navigate(['/gestion']);

        } else {

           this.loginError = true ;
        }

    }

  }

}
