import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredesComponent } from './ingredes.component';

describe('IngredesComponent', () => {
  let component: IngredesComponent;
  let fixture: ComponentFixture<IngredesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
