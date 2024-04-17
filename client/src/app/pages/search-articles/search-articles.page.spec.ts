import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchArticlesPage } from './search-articles.page';

describe('SearchArticlesPage', () => {
  let component: SearchArticlesPage;
  let fixture: ComponentFixture<SearchArticlesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchArticlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
