import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InginformaticaComponent } from './inginformatica.component';

describe('InginformaticaComponent', () => {
  let component: InginformaticaComponent;
  let fixture: ComponentFixture<InginformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InginformaticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InginformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
