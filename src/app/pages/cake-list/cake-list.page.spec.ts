import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeListPage } from './cake-list.page';

describe('CakeListPage', () => {
  let component: CakeListPage;
  let fixture: ComponentFixture<CakeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
