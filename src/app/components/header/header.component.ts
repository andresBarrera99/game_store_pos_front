import { Component, OnInit, Input } from '@angular/core';
import {ParametersService} from 'src/app/service/parameters/parameters.service'
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  isUserLoggedIn: Boolean = false;

  constructor(public parameters: ParametersService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.parameters.isUserLoggenIn();
  }
  
}
