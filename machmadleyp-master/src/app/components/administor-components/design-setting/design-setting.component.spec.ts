import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSettingComponent } from './design-setting.component';

describe('DesignSettingComponent', () => {
  let component: DesignSettingComponent;
  let fixture: ComponentFixture<DesignSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
