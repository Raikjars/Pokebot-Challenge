import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsDetailsComponent } from './pokemons-details.component';

describe('PokemonsDetailsComponent', () => {
  let component: PokemonsDetailsComponent;
  let fixture: ComponentFixture<PokemonsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
