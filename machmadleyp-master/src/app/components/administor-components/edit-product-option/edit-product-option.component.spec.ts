import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductOptionComponent } from './edit-product-option.component';

describe('EditProductOptionComponent', () => {
  let component: EditProductOptionComponent;
  let fixture: ComponentFixture<EditProductOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
