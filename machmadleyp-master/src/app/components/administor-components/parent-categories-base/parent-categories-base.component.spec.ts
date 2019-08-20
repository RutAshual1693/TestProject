import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCategoriesBaseComponent } from './parent-categories-base.component';

describe('ParentCategoriesBaseComponent', () => {
  let component: ParentCategoriesBaseComponent;
  let fixture: ComponentFixture<ParentCategoriesBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCategoriesBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCategoriesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
