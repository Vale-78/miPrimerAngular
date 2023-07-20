import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaColorComponent } from './linea-color.component';

describe('LineaColorComponent', () => {
  let component: LineaColorComponent;
  let fixture: ComponentFixture<LineaColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineaColorComponent]
    });
    fixture = TestBed.createComponent(LineaColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
