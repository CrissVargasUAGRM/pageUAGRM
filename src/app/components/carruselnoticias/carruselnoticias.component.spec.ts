import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselnoticiasComponent } from './carruselnoticias.component';

describe('CarruselnoticiasComponent', () => {
  let component: CarruselnoticiasComponent;
  let fixture: ComponentFixture<CarruselnoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselnoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselnoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
