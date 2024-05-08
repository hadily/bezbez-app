import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeShopPage } from './home-shop.page';

describe('HomeShopPage', () => {
  let component: HomeShopPage;
  let fixture: ComponentFixture<HomeShopPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
