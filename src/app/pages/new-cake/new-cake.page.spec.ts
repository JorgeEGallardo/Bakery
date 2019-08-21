import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCakePage } from './new-cake.page';

describe('NewCakePage', () => {
  let component: NewCakePage;
  let fixture: ComponentFixture<NewCakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCakePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
