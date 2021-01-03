import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowingtimeTabsMenuComponent } from './showingtime-tabs-menu.component';

describe('ShowingtimeTabsMenuComponent', () => {
  let component: ShowingtimeTabsMenuComponent;
  let fixture: ComponentFixture<ShowingtimeTabsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingtimeTabsMenuComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowingtimeTabsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
