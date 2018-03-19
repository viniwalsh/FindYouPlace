import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaUnicaComponent } from './busca-unica.component';

describe('BuscaUnicaComponent', () => {
  let component: BuscaUnicaComponent;
  let fixture: ComponentFixture<BuscaUnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaUnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaUnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
