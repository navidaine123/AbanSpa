

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { globalEnvironment } from 'projects/shared-libraries/environments/environment';
import { AuthService } from 'projects/shared-libraries/src/lib/services/http/auth/auth.service';

@Component({
  selector: 'share-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = fb.group({
      userName: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    localStorage.removeItem(globalEnvironment.authKey)
  }

  submit() {
    this.authService.login(this.form.value).subscribe(x => {
      localStorage.setItem(globalEnvironment.authKey, x);
      this.router.navigate(['']);
      console.log(x);
    })
  }
}
