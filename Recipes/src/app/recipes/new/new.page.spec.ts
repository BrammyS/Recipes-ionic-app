import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPage } from './new.page';

describe('NewPage', () => {
  let component: NewPage;
  let fixture: ComponentFixture<NewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
