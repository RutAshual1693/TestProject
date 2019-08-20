import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountBaseComponent } from './discount-base.component';

describe('DiscountBaseComponent', () => {
  let component: DiscountBaseComponent;
  let fixture: ComponentFixture<DiscountBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
