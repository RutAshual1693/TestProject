import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesBaseComponent } from './categories-base.component';

describe('CategoriesBaseComponent', () => {
  let component: CategoriesBaseComponent;
  let fixture: ComponentFixture<CategoriesBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
