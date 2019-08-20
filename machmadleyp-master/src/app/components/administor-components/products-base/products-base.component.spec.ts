import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBaseComponent } from './products-base.component';

describe('ProductsBaseComponent', () => {
  let component: ProductsBaseComponent;
  let fixture: ComponentFixture<ProductsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
