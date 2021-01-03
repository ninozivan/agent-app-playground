import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowingtimeListingMlsDetailsComponent } from './showingtime-listing-mls-details.component';

describe('ShowingtimeListingMlsDetailsComponent', () => {
  let component: ShowingtimeListingMlsDetailsComponent;
  let fixture: ComponentFixture<ShowingtimeListingMlsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingtimeListingMlsDetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowingtimeListingMlsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
