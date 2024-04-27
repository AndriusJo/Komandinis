import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsrutoGeneravimasComponent } from './marsruto-generavimas.component';

describe('MarsrutoGeneravimasComponent', () => {
  let component: MarsrutoGeneravimasComponent;
  let fixture: ComponentFixture<MarsrutoGeneravimasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarsrutoGeneravimasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarsrutoGeneravimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
