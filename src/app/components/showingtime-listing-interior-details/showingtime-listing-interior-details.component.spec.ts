import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowingtimeListingInteriorDetailsComponent } from './showingtime-listing-interior-details.component';

describe('ShowingtimeListingInteriorDetailsComponent', () => {
  let component: ShowingtimeListingInteriorDetailsComponent;
  let fixture: ComponentFixture<ShowingtimeListingInteriorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingtimeListingInteriorDetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowingtimeListingInteriorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
