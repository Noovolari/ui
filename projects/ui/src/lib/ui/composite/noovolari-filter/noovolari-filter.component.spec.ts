import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoovolariFilterComponent } from './noovolari-filter.component';

describe('NoovolariFilterComponent', () => {
  let component: NoovolariFilterComponent;
  let fixture: ComponentFixture<NoovolariFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoovolariFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoovolariFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
