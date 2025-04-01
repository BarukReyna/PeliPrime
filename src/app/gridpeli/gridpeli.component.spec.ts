import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridpeliComponent } from './gridpeli.component';

describe('GridpeliComponent', () => {
  let component: GridpeliComponent;
  let fixture: ComponentFixture<GridpeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridpeliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridpeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
