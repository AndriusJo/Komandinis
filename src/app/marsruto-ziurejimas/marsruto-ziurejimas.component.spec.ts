import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsrutoZiurejimasComponent } from './marsruto-ziurejimas.component';

describe('MarsrutoZiurejimasComponent', () => {
  let component: MarsrutoZiurejimasComponent;
  let fixture: ComponentFixture<MarsrutoZiurejimasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarsrutoZiurejimasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarsrutoZiurejimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
