import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeP2Page } from './home-p2.page';

describe('HomeP2Page', () => {
  let component: HomeP2Page;
  let fixture: ComponentFixture<HomeP2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeP2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
