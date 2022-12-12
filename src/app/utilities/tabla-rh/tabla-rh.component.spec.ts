import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRhComponent } from './tabla-rh.component';

describe('TablaRhComponent', () => {
  let component: TablaRhComponent;
  let fixture: ComponentFixture<TablaRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
