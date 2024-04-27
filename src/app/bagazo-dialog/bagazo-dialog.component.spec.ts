import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagazoDialogComponent } from './bagazo-dialog.component';

describe('BagazoDialogComponent', () => {
  let component: BagazoDialogComponent;
  let fixture: ComponentFixture<BagazoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BagazoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagazoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
