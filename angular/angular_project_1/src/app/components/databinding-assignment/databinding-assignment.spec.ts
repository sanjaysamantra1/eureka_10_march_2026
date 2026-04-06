import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingAssignment } from './databinding-assignment';

describe('DatabindingAssignment', () => {
  let component: DatabindingAssignment;
  let fixture: ComponentFixture<DatabindingAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingAssignment],
    }).compileComponents();

    fixture = TestBed.createComponent(DatabindingAssignment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
