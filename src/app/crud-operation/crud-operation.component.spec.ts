import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOperationComponent } from './crud-operation.component';

describe('CrudOperationComponent', () => {
  let component: CrudOperationComponent;
  let fixture: ComponentFixture<CrudOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
