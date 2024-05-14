import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:  string = '';
  password: string = '';
  submitted : boolean = false

  constructor(private router: Router,){

  }

  login(){
    // this.router.navigate(['']);

    this.submitted = true;
    // if (this.username && this.password) {
    //   alert('Logged in successfully');
    //   this.router.navigate(['/dashboard']);
    // }
    
  }

}
