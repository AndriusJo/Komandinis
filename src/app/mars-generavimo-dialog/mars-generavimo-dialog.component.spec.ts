import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsGeneravimoDialogComponent } from './mars-generavimo-dialog.component';

describe('MarsGeneravimoDialogComponent', () => {
  let component: MarsGeneravimoDialogComponent;
  let fixture: ComponentFixture<MarsGeneravimoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarsGeneravimoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarsGeneravimoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
