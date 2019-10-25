import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLettersComponent } from './table-letters.component';

describe('TableLettersComponent', () => {
  let component: TableLettersComponent;
  let fixture: ComponentFixture<TableLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
