import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDatosComponent } from './cuadro-datos.component';

describe('CuadroDatosComponent', () => {
  let component: CuadroDatosComponent;
  let fixture: ComponentFixture<CuadroDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
