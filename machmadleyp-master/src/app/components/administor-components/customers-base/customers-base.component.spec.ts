import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersBaseComponent } from './customers-base.component';

describe('CustomersBaseComponent', () => {
  let component: CustomersBaseComponent;
  let fixture: ComponentFixture<CustomersBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
