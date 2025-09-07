import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JwtInterceptor } from './jwt-interceptor';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthService } from '../services/api';

describe('JwtInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let authServiceMock: any;

  beforeEach(() => {
    authServiceMock = { getToken: jasmine.createSpy().and.returnValue('fake-token') };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should add an Authorization header', () => {
    httpClient.get('/test').subscribe();
    const req = httpMock.expectOne('/test');
    expect(req.request.headers.has('Authorization')).toBeTrue();
    expect(req.request.headers.get('Authorization')).toBe('Bearer fake-token');
  });
});
