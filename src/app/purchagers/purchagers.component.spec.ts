import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchagersComponent } from './purchagers.component';

describe('PurchagersComponent', () => {
  let component: PurchagersComponent;
  let fixture: ComponentFixture<PurchagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
