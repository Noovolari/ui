import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoovolariButtonComponent } from './noovolari-button.component';

describe('NoovolariButtonComponent', () => {
  let component: NoovolariButtonComponent;
  let fixture: ComponentFixture<NoovolariButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoovolariButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoovolariButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
