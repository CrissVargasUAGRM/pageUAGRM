import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionvisionComponent } from './misionvision.component';

describe('MisionvisionComponent', () => {
  let component: MisionvisionComponent;
  let fixture: ComponentFixture<MisionvisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisionvisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisionvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
