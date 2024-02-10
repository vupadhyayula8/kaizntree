import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private apiService:ApiServiceService){}
  loginForm = new FormGroup({
 name : new FormControl('',[Validators.required,Validators.pattern(/[a-zA-Z0-9]+/)]),
 password :new FormControl('',Validators.required)
})
  OnSubmit()
  {
    if(this.loginForm.valid)
    {
      //loginData:Login
      this.apiService.login(this.loginForm.value.name,this.loginForm.value.password);
    }
  }
}
