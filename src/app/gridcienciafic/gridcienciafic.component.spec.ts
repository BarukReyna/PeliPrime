import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcienciaficComponent } from './gridcienciafic.component';

describe('GridcienciaficComponent', () => {
  let component: GridcienciaficComponent;
  let fixture: ComponentFixture<GridcienciaficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridcienciaficComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridcienciaficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
