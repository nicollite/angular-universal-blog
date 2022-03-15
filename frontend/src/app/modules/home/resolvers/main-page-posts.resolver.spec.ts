import { TestBed } from '@angular/core/testing';

import { MainPagePostsResolver } from './main-page-posts.resolver';

describe('MainPagePostsResolver', () => {
  let resolver: MainPagePostsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MainPagePostsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
