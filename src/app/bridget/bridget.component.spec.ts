import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BridgetComponent } from './bridget.component';

describe('BridgetComponent', () => {
  let component: BridgetComponent;
  let fixture: ComponentFixture<BridgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgetComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BridgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
