import { TestBed } from '@angular/core/testing';

import { GhHttpService} from './git.service';

describe('GitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhHttpService = TestBed.get(GhHttpService);
    expect(service).toBeTruthy();
  });
});
