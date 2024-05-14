import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilioLangasComponent } from './profilio-langas.component';

describe('ProfilioLangasComponent', () => {
  let component: ProfilioLangasComponent;
  let fixture: ComponentFixture<ProfilioLangasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilioLangasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilioLangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
