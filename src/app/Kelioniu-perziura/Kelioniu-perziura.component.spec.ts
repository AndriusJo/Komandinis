import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelioniuPerziuraComponent } from './Kelioniu-perziura.component';

describe('MarsrutoZiurejimasComponent', () => {
  let component: KelioniuPerziuraComponent;
  let fixture: ComponentFixture<KelioniuPerziuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KelioniuPerziuraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KelioniuPerziuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
