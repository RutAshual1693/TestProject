import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBaseComponent } from './sales-base.component';

describe('SalesBaseComponent', () => {
  let component: SalesBaseComponent;
  let fixture: ComponentFixture<SalesBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
