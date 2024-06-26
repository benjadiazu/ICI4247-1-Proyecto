import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitorearPage } from './monitorear.page';

describe('MonitorearPage', () => {
  let component: MonitorearPage;
  let fixture: ComponentFixture<MonitorearPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
