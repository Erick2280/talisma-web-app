import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RollPage } from './roll.page';

describe('RollPage', () => {
  let component: RollPage;
  let fixture: ComponentFixture<RollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
