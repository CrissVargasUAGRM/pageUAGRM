import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtspageComponent } from './firtspage.component';

describe('FirtspageComponent', () => {
  let component: FirtspageComponent;
  let fixture: ComponentFixture<FirtspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirtspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirtspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
