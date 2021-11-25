import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregfrecComponent } from './pregfrec.component';

describe('PregfrecComponent', () => {
  let component: PregfrecComponent;
  let fixture: ComponentFixture<PregfrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregfrecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregfrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
