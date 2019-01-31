import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcprogComponent } from './ccprog.component';

describe('CcprogComponent', () => {
  let component: CcprogComponent;
  let fixture: ComponentFixture<CcprogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcprogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
