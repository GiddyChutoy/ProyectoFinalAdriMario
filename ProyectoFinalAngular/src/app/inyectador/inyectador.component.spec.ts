import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InyectadorComponent } from './inyectador.component';

describe('InyectadorComponent', () => {
  let component: InyectadorComponent;
  let fixture: ComponentFixture<InyectadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InyectadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InyectadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
