import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultamisvisComponent } from './facultamisvis.component';

describe('FacultamisvisComponent', () => {
  let component: FacultamisvisComponent;
  let fixture: ComponentFixture<FacultamisvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultamisvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultamisvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
