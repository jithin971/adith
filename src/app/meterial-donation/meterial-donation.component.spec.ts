import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterialDonationComponent } from './meterial-donation.component';

describe('MeterialDonationComponent', () => {
  let component: MeterialDonationComponent;
  let fixture: ComponentFixture<MeterialDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterialDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterialDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
