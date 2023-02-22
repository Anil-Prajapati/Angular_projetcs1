import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrarentComponent } from './prarent.component';

describe('PrarentComponent', () => {
  let component: PrarentComponent;
  let fixture: ComponentFixture<PrarentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrarentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrarentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
