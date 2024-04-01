import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeP3Page } from './home-p3.page';

describe('HomeP3Page', () => {
  let component: HomeP3Page;
  let fixture: ComponentFixture<HomeP3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeP3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
