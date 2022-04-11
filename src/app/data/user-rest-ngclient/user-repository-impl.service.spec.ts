import {TestBed} from '@angular/core/testing';

import {UserRepositoryImplService} from './user-repository-impl.service';

describe('UserRepositoryImplService', () => {
  let service: UserRepositoryImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRepositoryImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
