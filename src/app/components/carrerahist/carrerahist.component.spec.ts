import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerahistComponent } from './carrerahist.component';

describe('CarrerahistComponent', () => {
  let component: CarrerahistComponent;
  let fixture: ComponentFixture<CarrerahistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrerahistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerahistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
