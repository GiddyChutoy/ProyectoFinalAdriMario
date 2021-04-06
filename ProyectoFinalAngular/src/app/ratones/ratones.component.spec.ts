import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatonesComponent } from './ratones.component';

describe('RatonesComponent', () => {
  let component: RatonesComponent;
  let fixture: ComponentFixture<RatonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
