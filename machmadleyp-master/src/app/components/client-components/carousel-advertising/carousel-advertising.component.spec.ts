import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAdvertisingComponent } from './carousel-advertising.component';

describe('CarouselAdvertisingComponent', () => {
  let component: CarouselAdvertisingComponent;
  let fixture: ComponentFixture<CarouselAdvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselAdvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
