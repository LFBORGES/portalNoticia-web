import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoFormularioComponent } from './arquivo-formulario.component';

describe('ArquivoFormularioComponent', () => {
  let component: ArquivoFormularioComponent;
  let fixture: ComponentFixture<ArquivoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
