import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MGComponent } from './mgd.component';

describe('MGComponent', () => {
  let component: MGComponent;
  let fixture: ComponentFixture<MGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MGComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
