import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateRentPage } from './create-rent.page';

describe('CreateRentPage', () => {
  let component: CreateRentPage;
  let fixture: ComponentFixture<CreateRentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
