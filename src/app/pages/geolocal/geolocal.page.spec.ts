import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalPage } from './geolocal.page';

describe('GeolocalPage', () => {
  let component: GeolocalPage;
  let fixture: ComponentFixture<GeolocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
