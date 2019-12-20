import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPokemonComponent } from './filtro-pokemon.component';

describe('FiltroPokemonComponent', () => {
  let component: FiltroPokemonComponent;
  let fixture: ComponentFixture<FiltroPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
