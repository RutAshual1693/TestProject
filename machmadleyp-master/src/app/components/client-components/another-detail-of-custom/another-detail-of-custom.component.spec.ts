import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherDetailOfCustomComponent } from './another-detail-of-custom.component';

describe('AnotherDetailOfCustomComponent', () => {
  let component: AnotherDetailOfCustomComponent;
  let fixture: ComponentFixture<AnotherDetailOfCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherDetailOfCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherDetailOfCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
