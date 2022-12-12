import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRhComponent } from './modificar-rh.component';

describe('ModificarRhComponent', () => {
  let component: ModificarRhComponent;
  let fixture: ComponentFixture<ModificarRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
