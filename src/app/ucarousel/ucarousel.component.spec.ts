import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcarouselComponent } from './ucarousel.component';

describe('UcarouselComponent', () => {
  let component: UcarouselComponent;
  let fixture: ComponentFixture<UcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
