import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsAndWellsComponent } from './panels-and-wells.component';

describe('PanelsAndWellsComponent', () => {
  let component: PanelsAndWellsComponent;
  let fixture: ComponentFixture<PanelsAndWellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelsAndWellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsAndWellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
