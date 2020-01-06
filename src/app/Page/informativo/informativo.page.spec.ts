import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformativoPage } from './informativo.page';

describe('InformativoPage', () => {
  let component: InformativoPage;
  let fixture: ComponentFixture<InformativoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformativoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
