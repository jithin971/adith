import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrInitiativeComponent } from './csr-initiative.component';

describe('CsrInitiativeComponent', () => {
  let component: CsrInitiativeComponent;
  let fixture: ComponentFixture<CsrInitiativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsrInitiativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
