import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorrisChartsComponent } from './morris-charts.component';

describe('MorrisChartsComponent', () => {
  let component: MorrisChartsComponent;
  let fixture: ComponentFixture<MorrisChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorrisChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorrisChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
