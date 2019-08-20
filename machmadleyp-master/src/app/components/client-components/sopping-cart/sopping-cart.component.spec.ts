import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoppingCartComponent } from './sopping-cart.component';

describe('SoppingCartComponent', () => {
  let component: SoppingCartComponent;
  let fixture: ComponentFixture<SoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
