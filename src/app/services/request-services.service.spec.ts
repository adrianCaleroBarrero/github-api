import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { iInfo, iUser } from '../models/users-github.model';

import { RequestServicesService } from './request-services.service';

describe('RequestServicesService', () => {
  let mockUsers: iUser[] = [];
  let mockInfo = {
    incomplete_results: false,
    items: [mockUsers],
    total_count: 1,
  };

  let service: RequestServicesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RequestServicesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When i use the method getAllFollowers', () => {
    it('Then it should be called', () => {
      service
        .getAllFollowers('https://api.github.com/users/jose/followers')
        .subscribe((resp) => {
          expect(resp).not.toBeNull();
          expect(JSON.stringify(resp)).toEqual(JSON.stringify({}));
        });

      const req = httpTestingController.expectOne({
        method: 'GET',
        url: 'https://api.github.com/users/jose/followers',
      });

      expect(req.request.url).toBe(
        'https://api.github.com/users/jose/followers'
      );

      req.flush({});
    });
  });

  describe('When i use the method getAllRepos', () => {
    it('Then it should be called', () => {
      service
        .getAllRepos('https://api.github.com/users/jose/repos')
        .subscribe((resp) => {
          expect(resp).not.toBeNull();
          expect(JSON.stringify(resp)).toEqual(JSON.stringify({}));
        });

      const req = httpTestingController.expectOne({
        method: 'GET',
        url: 'https://api.github.com/users/jose/repos',
      });

      expect(req.request.url).toBe('https://api.github.com/users/jose/repos');

      req.flush({});
    });
  });

  describe('When i use the method getAllRepos', () => {
    it('Then it should be called', () => {
      spyOn(service, 'getInfo').and.callThrough();
      service.getInfo(mockInfo as unknown as iInfo);

      expect(service.getInfo).toHaveBeenCalled();
    });
  });

  describe('When i use the method getSearch', () => {
    it('Then it should be called', () => {
      spyOn(service, 'getSearch').and.callThrough();
      service.getSearch('test');

      expect(service.getSearch).toHaveBeenCalled();
    });
  });
});
