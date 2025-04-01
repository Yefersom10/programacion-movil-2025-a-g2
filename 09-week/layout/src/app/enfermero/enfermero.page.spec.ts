import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnfermeroPage } from './enfermero.page';

describe('EnfermeroPage', () => {
  let component: EnfermeroPage;
  let fixture: ComponentFixture<EnfermeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
