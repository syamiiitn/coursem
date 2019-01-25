import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AauthorsComponent } from './aauthors.component';

describe('AauthorsComponent', () => {
  let component: AauthorsComponent;
  let fixture: ComponentFixture<AauthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AauthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
