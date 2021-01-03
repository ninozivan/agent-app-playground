import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowingtimeListingActionButtonsComponent } from './showingtime-listing-action-buttons.component';

describe('ShowingtimeListingActionButtonsComponent', () => {
  let component: ShowingtimeListingActionButtonsComponent;
  let fixture: ComponentFixture<ShowingtimeListingActionButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingtimeListingActionButtonsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowingtimeListingActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
