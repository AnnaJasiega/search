import { TestBed } from '@angular/core/testing';

import { ProfilesResolver } from './profiles.resolver';

describe('ProfilesResolver', () => {
  let resolver: ProfilesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfilesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
