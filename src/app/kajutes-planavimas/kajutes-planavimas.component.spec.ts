import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KajutesPlanavimasComponent } from './kajutes-planavimas.component';

describe('KajutesPlanavimasComponent', () => {
  let component: KajutesPlanavimasComponent;
  let fixture: ComponentFixture<KajutesPlanavimasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KajutesPlanavimasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KajutesPlanavimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
