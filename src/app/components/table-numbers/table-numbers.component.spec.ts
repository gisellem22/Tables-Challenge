import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNumbersComponent } from './table-numbers.component';

describe('TableNumbersComponent', () => {
  let component: TableNumbersComponent;
  let fixture: ComponentFixture<TableNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
