import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicaComponent } from './academica.component';

describe('AcademicaComponent', () => {
  let component: AcademicaComponent;
  let fixture: ComponentFixture<AcademicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
