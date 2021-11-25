import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngsistemasComponent } from './ingsistemas.component';

describe('IngsistemasComponent', () => {
  let component: IngsistemasComponent;
  let fixture: ComponentFixture<IngsistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngsistemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngsistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
