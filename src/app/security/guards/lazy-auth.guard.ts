import { inject } from '@angular/core';
import { CanActivateFn, CanLoad, CanMatchFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const lazyAuthGuard: CanMatchFn = () => {
  const router = inject(Router);
    //router.navigateByUrl('/home');
    const toastr = inject(ToastrService);
    toastr.error('Unauthorized.');
    return true;
};
