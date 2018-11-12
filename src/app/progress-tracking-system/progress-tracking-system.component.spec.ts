import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTrackingSystemComponent } from './progress-tracking-system.component';

describe('ProgressTrackingSystemComponent', () => {
  let component: ProgressTrackingSystemComponent;
  let fixture: ComponentFixture<ProgressTrackingSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressTrackingSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTrackingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
