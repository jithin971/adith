import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliminiComponent } from './alimini.component';

describe('AliminiComponent', () => {
  let component: AliminiComponent;
  let fixture: ComponentFixture<AliminiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliminiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
