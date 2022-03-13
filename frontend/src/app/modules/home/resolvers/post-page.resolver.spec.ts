import { TestBed } from '@angular/core/testing';

import { PostPageResolver } from './post-page.resolver';

describe('PostPageResolver', () => {
  let resolver: PostPageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PostPageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
