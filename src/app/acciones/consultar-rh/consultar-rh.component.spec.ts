import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRhComponent } from './consultar-rh.component';

describe('ConsultarRhComponent', () => {
  let component: ConsultarRhComponent;
  let fixture: ComponentFixture<ConsultarRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
