import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotegoryComponent } from './cotegory.component';

describe('CotegoryComponent', () => {
  let component: CotegoryComponent;
  let fixture: ComponentFixture<CotegoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotegoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
