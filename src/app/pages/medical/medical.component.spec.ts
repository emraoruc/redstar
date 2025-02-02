import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalComponent } from './medical.component';

describe('MedicalComponent', () => {
  let component: MedicalComponent;
  let fixture: ComponentFixture<MedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
