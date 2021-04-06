import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacasBaseComponent } from './placas-base.component';

describe('PlacasBaseComponent', () => {
  let component: PlacasBaseComponent;
  let fixture: ComponentFixture<PlacasBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacasBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacasBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
