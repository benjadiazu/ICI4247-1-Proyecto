import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConectarPage } from './conectar.page';

describe('ConectarPage', () => {
  let component: ConectarPage;
  let fixture: ComponentFixture<ConectarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
