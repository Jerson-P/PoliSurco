import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisoraComponent } from './emisora.component';

describe('EmisoraComponent', () => {
  let component: EmisoraComponent;
  let fixture: ComponentFixture<EmisoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmisoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
