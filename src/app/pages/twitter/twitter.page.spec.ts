import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwitterPage } from './twitter.page';

describe('TwitterPage', () => {
  let component: TwitterPage;
  let fixture: ComponentFixture<TwitterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwitterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
