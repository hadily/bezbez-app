import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatShopPage } from './stat-shop.page';

describe('StatShopPage', () => {
  let component: StatShopPage;
  let fixture: ComponentFixture<StatShopPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StatShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
