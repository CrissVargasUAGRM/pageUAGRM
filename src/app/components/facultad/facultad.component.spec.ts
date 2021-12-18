import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadComponent } from './facultad.component';

describe('FacultadComponent', () => {
  let component: FacultadComponent;
  let fixture: ComponentFixture<FacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
