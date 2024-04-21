import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductShop1Page } from './add-product-shop1.page';

describe('AddProductShop1Page', () => {
  let component: AddProductShop1Page;
  let fixture: ComponentFixture<AddProductShop1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddProductShop1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
