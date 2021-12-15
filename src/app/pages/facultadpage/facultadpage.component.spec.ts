import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadpageComponent } from './facultadpage.component';

describe('FacultadpageComponent', () => {
  let component: FacultadpageComponent;
  let fixture: ComponentFixture<FacultadpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
