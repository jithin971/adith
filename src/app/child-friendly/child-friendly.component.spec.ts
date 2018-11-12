import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFriendlyComponent } from './child-friendly.component';

describe('ChildFriendlyComponent', () => {
  let component: ChildFriendlyComponent;
  let fixture: ComponentFixture<ChildFriendlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFriendlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFriendlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
