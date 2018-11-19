import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioFormularioComponent } from './comentario-formulario.component';

describe('ComentarioFormularioComponent', () => {
  let component: ComentarioFormularioComponent;
  let fixture: ComponentFixture<ComentarioFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
