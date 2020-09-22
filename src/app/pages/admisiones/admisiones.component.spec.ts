import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisionesComponent } from './admisiones.component';

describe('AdmisionesComponent', () => {
  let component: AdmisionesComponent;
  let fixture: ComponentFixture<AdmisionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmisionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
