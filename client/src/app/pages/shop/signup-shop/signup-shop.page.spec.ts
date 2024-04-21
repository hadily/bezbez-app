import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SignupShopPage } from './signup-shop.page';

describe('SignupShopPage', () => {
  let component: SignupShopPage;
  let fixture: ComponentFixture<SignupShopPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignupShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
