import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaslauguDialogComponent } from './paslaugu-dialog.component';

describe('PaslauguDialogComponent', () => {
  let component: PaslauguDialogComponent;
  let fixture: ComponentFixture<PaslauguDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaslauguDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaslauguDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
