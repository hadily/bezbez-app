import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeP1Page } from './home-p1.page';

describe('HomeP1Page', () => {
  let component: HomeP1Page;
  let fixture: ComponentFixture<HomeP1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeP1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
