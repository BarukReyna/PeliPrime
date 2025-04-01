import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriddramaComponent } from './griddrama.component';

describe('GriddramaComponent', () => {
  let component: GriddramaComponent;
  let fixture: ComponentFixture<GriddramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GriddramaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GriddramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
