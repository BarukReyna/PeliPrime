import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridterrorComponent } from './gridterror.component';

describe('GridterrorComponent', () => {
  let component: GridterrorComponent;
  let fixture: ComponentFixture<GridterrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridterrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
