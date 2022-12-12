import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRhComponent } from './eliminar-rh.component';

describe('EliminarRhComponent', () => {
  let component: EliminarRhComponent;
  let fixture: ComponentFixture<EliminarRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
