import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private apiService:ApiServiceService,private router:Router){}
  isAuthenticated = false;
  loginForm = new FormGroup({
 name : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]),
 password :new FormControl('',Validators.required)
})
  OnSubmit()
  {
    if(this.loginForm.valid)
    {
      //loginData:Login
      this.apiService.login(this.loginForm.value.name,this.loginForm.value.password).subscribe(
        (resp)=>
        {
          if(resp.status == 200)
          {
            this.isAuthenticated = true;
            localStorage.setItem('isLoggedIn','true');
            const x = this.loginForm.value.name;
            if(x != null)
              localStorage.setItem('token', x ); 
            this.router.navigateByUrl('/item');
          }
        }
      );
    }
  }
}
