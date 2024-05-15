import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerGifDialogComponent } from './server-gif-dialog.component';

describe('ServerGifDialogComponent', () => {
  let component: ServerGifDialogComponent;
  let fixture: ComponentFixture<ServerGifDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerGifDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServerGifDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
