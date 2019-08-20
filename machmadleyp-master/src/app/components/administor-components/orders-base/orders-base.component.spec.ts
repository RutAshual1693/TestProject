import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersBaseComponent } from './orders-base.component';

describe('OrdersBaseComponent', () => {
  let component: OrdersBaseComponent;
  let fixture: ComponentFixture<OrdersBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
