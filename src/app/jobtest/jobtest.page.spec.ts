import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobtestPage } from './jobtest.page';

describe('JobtestPage', () => {
  let component: JobtestPage;
  let fixture: ComponentFixture<JobtestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JobtestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
