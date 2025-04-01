import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridseriesComponent } from './gridseries.component';

describe('GridseriesComponent', () => {
  let component: GridseriesComponent;
  let fixture: ComponentFixture<GridseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridseriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
