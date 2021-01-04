import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowingtimeHeaderDecorationShapesComponent } from './showingtime-header-decoration-shapes.component';

describe('ShowingtimeHeaderDecorationShapesComponent', () => {
  let component: ShowingtimeHeaderDecorationShapesComponent;
  let fixture: ComponentFixture<ShowingtimeHeaderDecorationShapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingtimeHeaderDecorationShapesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowingtimeHeaderDecorationShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
