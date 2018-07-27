import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCharactersComponent } from './show-characters.component';

describe('ShowCharactersComponent', () => {
  let component: ShowCharactersComponent;
  let fixture: ComponentFixture<ShowCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
