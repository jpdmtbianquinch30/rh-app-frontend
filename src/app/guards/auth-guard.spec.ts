import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { AuthService } from '../shared/services/api';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authServiceMock: any;
  let routerMock: any;

  beforeEach(() => {
    authServiceMock = { isLoggedIn: jasmine.createSpy() };
    routerMock = { createUrlTree: jasmine.createSpy() };

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('devrait permettre l’accès si l’utilisateur est connecté', () => {
    authServiceMock.isLoggedIn.and.returnValue(true);
    expect(guard.canActivate(null as any, null as any)).toBe(true);
  });

  it('devrait rediriger si l’utilisateur n’est pas connecté', () => {
    authServiceMock.isLoggedIn.and.returnValue(false);
    guard.canActivate(null as any, null as any);
    expect(routerMock.createUrlTree).toHaveBeenCalledWith(['/auth/login']);
  });
});
