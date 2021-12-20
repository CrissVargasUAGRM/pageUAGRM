import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecadigitalComponent } from './bibliotecadigital.component';

describe('BibliotecadigitalComponent', () => {
  let component: BibliotecadigitalComponent;
  let fixture: ComponentFixture<BibliotecadigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecadigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecadigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
