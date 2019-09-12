import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipePage } from './new-recipe.page';

describe('NewRecipePage', () => {
  let component: NewRecipePage;
  let fixture: ComponentFixture<NewRecipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRecipePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
