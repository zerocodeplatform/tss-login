import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompComponent } from './admin-comp.component';

describe('AdminCompComponent', () => {
  let component: AdminCompComponent;
  let fixture: ComponentFixture<AdminCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
