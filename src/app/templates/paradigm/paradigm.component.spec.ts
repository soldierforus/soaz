/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParadigmComponent } from './paradigm.component';

describe('ParadigmComponent', () => {
  let component: ParadigmComponent;
  let fixture: ComponentFixture<ParadigmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParadigmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParadigmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
