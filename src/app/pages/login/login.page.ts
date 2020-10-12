import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import {ParametersService} from 'src/app/service/parameters/parameters.service';
import { AppService } from 'src/app/service/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm : FormGroup;
  public showPass = false;
  public type = 'password';
  public icon = 'eye-outline';

  constructor(private router: Router,
    private parameters : ParametersService,
    private service : AppService) { 
      this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    });
  }

  ngOnInit() {
  }

  handleLogin(values){
    this.service.doPost({action : '/main/attemptLogin',postData : values})
    .then((responseBody : any) => {
      this.loginForm.reset()
      this.parameters.saveLogin(JSON.stringify(responseBody));
      this.router.navigate(['home']);
    }).catch(err =>{});
  }

  showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type = 'text';
      this.icon = 'eye-off-outline'
    } else {
      this.type = 'password';
      this.icon = 'eye-outline'
    }
 }

 numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }


}
