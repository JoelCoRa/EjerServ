import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRhComponent } from './listar-rh.component';

describe('ListarRhComponent', () => {
  let component: ListarRhComponent;
  let fixture: ComponentFixture<ListarRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
