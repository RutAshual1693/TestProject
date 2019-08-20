import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotCategoriesComponent } from './hot-categories.component';

describe('HotCategoriesComponent', () => {
  let component: HotCategoriesComponent;
  let fixture: ComponentFixture<HotCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
