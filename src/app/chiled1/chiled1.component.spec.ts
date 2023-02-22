import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chiled1Component } from './chiled1.component';

describe('Chiled1Component', () => {
  let component: Chiled1Component;
  let fixture: ComponentFixture<Chiled1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chiled1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chiled1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
