import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarRhComponent } from './registrar-rh.component';

describe('RegistrarRhComponent', () => {
  let component: RegistrarRhComponent;
  let fixture: ComponentFixture<RegistrarRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
