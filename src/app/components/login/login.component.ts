import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private router: Router) { }

  verifyUser = function(){
    this.router.navigateByUrl('/home');
  }
}
