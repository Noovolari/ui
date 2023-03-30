import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoovolariChipComponent } from './noovolari-chip.component';

describe('NoovolariChipComponent', () => {
  let component: NoovolariChipComponent;
  let fixture: ComponentFixture<NoovolariChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoovolariChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoovolariChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
