import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../jwt/auth.service';
import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authenticationGuard = () : CanActivateFn => {
  return () => {
    const router = inject(Router);
    const toastr = inject(ToastrService);
    toastr.error('Unauthorized.');
    router.navigateByUrl('/home');
    return false;
  };
}