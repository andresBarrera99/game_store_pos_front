import { Component, OnInit } from '@angular/core';
import {ParametersService} from 'src/app/service/parameters/parameters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private parameters : ParametersService,
    private router : Router) { }

  ngOnInit() {
    this.parameters.doLogout();
    setTimeout(() => {
      this.router.navigate(['login']);
  }, 3000);  //3s
  }

}
