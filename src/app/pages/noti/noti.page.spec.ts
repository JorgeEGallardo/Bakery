import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiPage } from './noti.page';

describe('NotiPage', () => {
  let component: NotiPage;
  let fixture: ComponentFixture<NotiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
