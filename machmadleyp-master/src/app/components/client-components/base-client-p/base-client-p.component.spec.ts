import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseClientPComponent } from './base-client-p.component';

describe('BaseClientPComponent', () => {
  let component: BaseClientPComponent;
  let fixture: ComponentFixture<BaseClientPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseClientPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseClientPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
