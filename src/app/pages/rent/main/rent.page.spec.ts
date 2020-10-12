import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentPage } from './rent.page';

describe('RentPage', () => {
  let component: RentPage;
  let fixture: ComponentFixture<RentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
