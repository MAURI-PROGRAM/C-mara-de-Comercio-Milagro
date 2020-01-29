import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErfilPage } from './erfil.page';

describe('ErfilPage', () => {
  let component: ErfilPage;
  let fixture: ComponentFixture<ErfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
