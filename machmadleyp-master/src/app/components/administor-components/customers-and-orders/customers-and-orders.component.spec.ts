import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAndOrdersComponent } from './customers-and-orders.component';

describe('CustomersAndOrdersComponent', () => {
  let component: CustomersAndOrdersComponent;
  let fixture: ComponentFixture<CustomersAndOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersAndOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersAndOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
