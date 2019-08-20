import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCastomersSayComponent } from './our-castomers-say.component';

describe('OurCastomersSayComponent', () => {
  let component: OurCastomersSayComponent;
  let fixture: ComponentFixture<OurCastomersSayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCastomersSayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCastomersSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
