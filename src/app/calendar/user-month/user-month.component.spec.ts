import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMonthComponent } from './user-month.component';

describe('UserMonthComponent', () => {
  let component: UserMonthComponent;
  let fixture: ComponentFixture<UserMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
