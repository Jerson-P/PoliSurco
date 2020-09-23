import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElpoliComponent } from './elpoli.component';

describe('ElpoliComponent', () => {
  let component: ElpoliComponent;
  let fixture: ComponentFixture<ElpoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElpoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElpoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
