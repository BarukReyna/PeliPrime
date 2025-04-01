import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriddocComponent } from './griddoc.component';

describe('GriddocComponent', () => {
  let component: GriddocComponent;
  let fixture: ComponentFixture<GriddocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GriddocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GriddocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
