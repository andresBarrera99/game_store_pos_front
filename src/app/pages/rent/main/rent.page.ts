import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/service/util/util.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.page.html',
  styleUrls: ['./rent.page.scss'],
})
export class RentPage implements OnInit {

  constructor(
    private util: UtilService) { }

  ngOnInit() {
  }

  optionNotAvailable(){
    this.util.showSimpleMessage('Error', 'Opcion no disponible');
  }

}
