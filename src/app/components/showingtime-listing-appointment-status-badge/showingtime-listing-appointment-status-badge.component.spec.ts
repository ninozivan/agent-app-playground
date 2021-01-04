import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowingtimeListingAppointmentStatusBadgeComponent } from './showingtime-listing-appointment-status-badge.component';

describe('ShowingtimeListingAppointmentStatusBadgeComponent', () => {
  let component: ShowingtimeListingAppointmentStatusBadgeComponent;
  let fixture: ComponentFixture<ShowingtimeListingAppointmentStatusBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingtimeListingAppointmentStatusBadgeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowingtimeListingAppointmentStatusBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
