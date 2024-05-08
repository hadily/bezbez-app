import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBezbezesPage } from './search-bezbezes.page';

describe('SearchBezbezesPage', () => {
  let component: SearchBezbezesPage;
  let fixture: ComponentFixture<SearchBezbezesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchBezbezesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
