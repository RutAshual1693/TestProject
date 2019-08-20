import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionsBaseComponent } from './product-options-base.component';

describe('ProductOptionsBaseComponent', () => {
  let component: ProductOptionsBaseComponent;
  let fixture: ComponentFixture<ProductOptionsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOptionsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOptionsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
